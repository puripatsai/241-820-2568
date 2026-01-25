function submitData() {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    // รวมค่าความสนใจเป็น String โดยคั่นด้วยคอมม่า
    let interest = '';
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value;
        if (i != interestDOMs.length - 1) {
            interest += ',';
        }
    }

    // สร้าง Object รวบรวมข้อมูล
    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM ? genderDOM.value : 'ไม่ได้ระบุ',
        description: descriptionDOM.value,
        interest: interest
    };

    console.log('submitData', userData);
    alert("บันทึกข้อมูลเรียบร้อยแล้ว! (ตรวจสอบค่าได้ใน Console)");
}