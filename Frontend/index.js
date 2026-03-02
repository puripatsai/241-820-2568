const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestsDOM = document.querySelectorAll('input[name=interests]:checked')
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('message')

    try {
        // 1. รวมค่าความสนใจ
        let interests = ''
        interestsDOM.forEach((item, index) => {
            interests += item.value;
            if (index !== interestsDOM.length - 1) {
                interests += ', ';
            }
        });

        // 2. สร้าง Object ข้อมูล (ประกาศไว้ข้างใน try)
        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: parseInt(ageDOM.value),
            gender: genderDOM ? genderDOM.value : null,
            interests: interests,
            description: descriptionDOM.value
        };

        // 3. แสดงข้อมูลใน Console (ต้องอยู่ข้างในปีกกา try ถึงจะมองเห็น userData)
        console.log('ข้อมูลที่จะส่ง:', userData);

        // 4. ส่งข้อมูลไปที่ Backend
        const response = await axios.post('http://localhost:8000/users', userData)
        
        // 5. แสดงผลเมื่อสำเร็จ
        console.log('Server response:', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ'
        messageDOM.className = 'message success'

    } catch (error) {
        // จัดการกรณีเกิดข้อผิดพลาด
        if (error.response) {
            console.log('Error response:', error.response.data.message);
        } else {
            console.error('Error:', error.message);
        }
        messageDOM.innerText = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล'
        messageDOM.className = 'message danger'
    }

}