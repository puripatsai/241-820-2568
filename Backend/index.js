const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let users = []
let counter = 1;
let conn = null;

const iniyMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    });
}

//path = GET /users สำหรับ get ข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});

//path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, age, gender, interests, description } = req.body;

        const [result] = await conn.query(
            `INSERT INTO users 
            (firstname, lastname, age, gender, interests, description)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                firstName,
                lastName,
                age,
                gender,
                interests,
                description || ''   // กันค่าว่าง
            ]
        );

        res.json({
            message: 'User created successfully',
            insertId: result.insertId
        });

    } catch (error) {
        console.error("DB ERROR:", error);
        res.status(500).json({
            message: 'Database error',
            error: error.message
        });
    }
});

// path GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (results[0].length === 0) {
            throw { StatusCode: 404, message: 'User not found' };
        }
        res.json(results[0][0]);
    }
    catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.StatusCode || 500;
        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
})



//PUT /users/:id สำหรับแก้ไข user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updateUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        if (results[0].affectedRows === 0) {
            throw { StatusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: updateUser
        });
    }
    catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.StatusCode || 500;
        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
})

//DELETE /users/:id สำหรับลบ user ที่มี id ตรงกับที่ส่งมา
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', [id]);
        if (results[0].affectedRows === 0) {
            throw { StatusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User deleted successfully',
        });
    }
    catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.StatusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
})

app.listen(port, async () => {
    await iniyMySQL();
    console.log(`Server running on port ${port}`);
});