//
{
    // 1. String
    let firstName = "John Doe";
    const idcard = '123';

    // 2. Number
    let age = 30;
    let height = 5.9;

    // 3. Boolean
    let isStudent = false;
    firstName = 'test';
    console.log('My name is', firstName, 'and I am', age, 'years old.');
}
//
{
    /*
    + บวก
    - ลบ
    * คูณ
    / หาร
    % หารเอาเศษ mod
    */

    let number1 = 'test';
    let number2 = 'xxx';

    let result = number1 + number2;
    console.log("ผลบวก =", result);
}
//
{
    /*
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    < น้อยกว่า
    >= มากกว่าหรือเท่ากับ
    <= น้อยกว่าหรือเท่ากับ
    */

    let number1 = 10;
    let number2 = 20;

    let condition1 = (number1 == number2); 
    console.log("result of condition is:", condition1);
}
// ชุดที่ 2
{
    /* Grade
    >= 80 เป็นเกรด A
    >= 70 เป็นเกรด B
    >= 60 เป็นเกรด C
    >= 50 เป็นเกรด D
    < 50 เป็นเกรด F
    */

    let score = prompt("ป้อนคะแนนของคุณ");
    console.log("คะแนนของคุณ", + score);

    if (score >= 80) {
        console.log('Grade A');
    } else if (score >= 70) {
        console.log('Grade B');
    } else if (score >= 60) {
        console.log('Grade C');
    } else if (score >= 50) {
        console.log('Grade D');
    } else {
        console.log('Grade F');
    }
}
//
{
    /*
    && และ
    || หรือ
    ! not หรือ ไม่
    */
    let number1 = 5;
    let number2 = 8;
    
    // true && false
    let condition = !(number1 >= 3 || number2 >= 10);
    console.log("condition:", condition);

    let age = 30;
    let gender = "ชาย";

    // true && true = true
    if (age >= 20 && gender == "ชาย") {
        console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
    }

    let number = 20;
    if (number % 2 == 0) {
        console.log("เป็นเลขคู่");
    }

    /*
    loop statements:
    while
    for
    */

    let counter = 0;
    while(counter < 10) {
        console.log('Hello World');
        counter += 1;
    }

    for(let i=0; i>10; i++){
        console.log('Hello World form for loop');
    }
}

{
/*
array
*/
let a = 10
let b = 20
let c = 30
console.log('a:', a, 'b:', b, 'c:', c)

let ages = [10,20,30] // array 3 items
console.log('ages:', ages)
console.log('ages[1]:', ages[1])

//1. แทนที่ ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list:', ages)
//2. ต่อ array
ages.push(35)
console.log('ages after push:', ages)
//3. ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop', ages)
}

/*
array
*/

let ages = [25, 30, 35, 40, 45]
console.log('Ages:', ages)

let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits:', fruits)
fruits.push('mango')
console.log('Fruits after push:', fruits)
console.log('First fruit:', fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit at index ${i}:', fruits[i])
}
/*
Object
*/

let student = [{
    age: 30,
    name: "John",
    grade: 'A'
}, {
    age: 25,
    name: "Jane",
    grade: 'B'
}]

for (let i = 0; i < student.length; i++) {
    console.log("Student " + (i + 1) + ":");
    console.log("Name: " + student[i].name);
    console.log("Age: " + student[i].age);
    console.log("Grade: " + student[i].grade);
}

student.push({
    age: 28,
    name: "Mike",
    grade: 'C'
});
console.log("Added new student:", student[student.length - 1]);

student.pop();
console.log("Remove last student. Current students:", student);


/*
function
*/

let score1 = 10
let score2 = 80

function calculation_grade(score){
    if (score >= 80 ){
    grade = 'A'
    } else if (score >= 70){
    grade = 'B'
    } else if (score >= 60){
    grade = 'C'
    } else if (score >= 50){
    grade = 'D'
    } else {
    grade = 'F'
    }
    return grade
}
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1: ' + score1 + ', Grade: ' + grade1)
console.log('Score2: ' + score2 + ', Grade: ' + grade2)

/*
array
*/

let scores = [90, 80, 70, 60, 50];

for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}: ${scores[i]}`);
}

scores = scores.map((s) => {
    return s - 10;
})

scores.forEach((s) => {
    console.log('score:', s);
})
//map, filter

{
/*
array
*/

let scores = [90, 80, 70, 60, 50];
let newScores = [];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);

    if (scores[i] >= 70) {
        newScores.push(scores[i]);
    }
}

newScores.forEach((ns) => {
    console.log('new score: ' + ns);
});
}

{
/*
Object functions
*/

let students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Jim", age: 21, grade: "C" }
];

console.log('Student', students[0]);

let student = students.find((s) => {
    return s.name === "Jane";
});

let dubblescoreStudents = students.map((s) => {
    s.age = s.age * 2;
    return s;
});

let highGradeStudents = students.filter((s) => {
    return s.grade === "A";
});

console.log('Found Student', student);
console.log('Dobble Score Students', dubblescoreStudents);
console.log('High Grade Students', highGradeStudents);
}
