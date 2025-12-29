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