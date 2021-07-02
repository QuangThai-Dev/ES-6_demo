/**
 * Khai báo biến
 * - Khai báo biến với let và const
 * - so sánh giữa let, const và var
 *  + var: có hoisting, function scope
 *  + let, const: không có hoisting, block scope
 *  + const: Bắt buộc phải gán value khi khai báo và k thể re-assign giá trị
 * - Nên dùng cái nào trong trường hợp nào
 *  + var: khi browser không hỗ trợ let, const (IE)
 *  + let: khi cần re-assign giá trị
 *  + const: khi không cần re-assign giá trị
 */

// var(Khi khai báo biến thì biến var có trong object window )
// console.log(fullName); // work(undefined)
// fullName = 'Vo Quang Teo';
// console.log(fullName);
// console.log(window.fullName);
// var fullName = 'Vo Quang Thai';
// var fullName = 'Võ Quang Nam';
// console.log(fullName);
// console.log(window.fullName);

// // Đối với var thì var chính là function scop 
// function showErrorWithVar() {
//     var isError = true;
//     var error = '';
//     if (isError) {
//         var error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }
// showErrorWithVar();

// let(khi khai báo biến thì biến đó không có trong object window)
// console.log(age); //lỗi(Error: Cannot access 'age' before initialization)
// let age = 18;
// console.log(age);
// let age = 20;
// age = 19;
// console.log(age);
// console.log(window.age);
// Đối với let là block scope
// function showErrorWithLet() {
//     let isError = true;
//     let error = '';
//     if (isError) {
//         let error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }
// showErrorWithLet();

// const
// const birthYear; //Lỗi: Bắt buộc phải gán giá trị khi khai báo
// const birthYear = 2000;
// console.log(birthYear);
// birthYear = 2001 //Lỗi: Không thể gán lại giá trị mới khi khai báo bằng const

// function showErrorWithConst() {
//     let isError = true;
//     const error = '';
//     if (isError) {
//         const error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }
// showErrorWithConst();

/**
 * Function
 * - Arrow Function
 * - So sánh declaration .vs expression (nomal function) .vs arrow function (cú pháp, con trỏ this)
 */

// Expression function
// const calAgeNormal = function(birthDay) {
//     console.log(this); //Nếu this chưa đc định nghĩa thì this chính à golbal object hay là window Object
//     return 2021 - birthDay;
// }

// calAgeNormal();

// Arrow function
/**
 * Không định nghĩa bối cảnh thực thi (this) của riêng nó
 * Không quan tâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer func 
 * Nếu nó không có outer function thì this = global object (window)
 * Không dùng Arrow function để làm constructor function và làm method của object
 * */
// const calcAgeArrow = (birthYear) => {
//     console.log(window);
//     console.log(2021 - birthYear);
// }
// calcAgeArrow(2000);

// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;

// let hi = calcAgeArrowShort(1999);
// console.log(hi);

// const calcAgeOneParam = birthYear => 2021 - birthYear;

// let teo = calcAgeArrowShort(1998);
// console.log(teo)

// const Student = () => {

// }

// var tay = new Student(); //TypeError: Student is not a constructor
// var birthYear = 1998;

// const student = {
//     name: 'Thai',
//     birthYear: 2000,

//     calcAgeNormal: function() {
// console.log(this)
// console.log(2021 - this.birthYear)
// const _this = this;

// const checkAgeNormal = function() {
//     console.log('check age Normal', this.birthYear)
//     if ((2021 - this.birthYear) >= 18) {
//         // console.log(this.birthYear)
//         console.log('You are old enough');
//     } else {
//         console.log('You are not old enough');
//     }
// }.bind(this);

// const checkAgeNormal = () => {
//     console.log('check age Normal', this.birthYear)
//     if ((2021 - this.birthYear) >= 18) {
//         // console.log(this.birthYear)
//         console.log('You are old enough');
//     } else {
//         console.log('You are not old enough');
//     }
// };
// checkAgeNormal();
// },

//Không dùng arrow func làm phương thức của obj
//     calcAgeArrow: () => {
//         console.log(this)
//         console.log(2021 - this.birthYear)
//     }
// }

// student.calcAgeNormal();
// student.calcAgeArrow();

/**
 * Default Paramater
 */
// const winthoutDefaultParam = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page')
//     } else {
//         console.log('Redirect to admin page')
//     }
// };
// winthoutDefaultParam('admin');

// const withDefaultParam = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page')
//     } else {
//         console.log('Redirect to admin page')
//     }
// };
// withDefaultParam();
// withDefaultParam('admin');


/**
 * Destructuring
 *  - Destructure Array
 *  - Destructure Object
 */

//With Array
//Without Destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// const tay = students[0];
// const huy = students[2];
// console.log(tay, huy);

//Without Destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// const [a, , c] = students;
// console.log(a, c);

//With Object
//Without Array
// const student = {
//     name: 'Thai',
//     age: 20,
//     class: 'BC12'
// }
// const fullName = student.name;
// const age = student.age;
// console.log(fullName, age);

//Without Destructuring
// const student = {
//     fullName: 'Thai',
//     age: 20,
//     class: 'BC12'
// }
// const { fullName, class: className } = student;
// console.log(fullName, className);

/**
 * Template String
 */

// const fullName = 'Quang Thai';
// const str = 'My name is' + fullName;
// const templateStr = `My name is ${fullName}`;


/**
 * Enhanced Object Literals (Shorthand syntax)
 */
const age = 18;

var person = {
    fullName: ';Vo Quang Thái',
    age, //age: age
    calcAgen() {
        return 2021 - this.age;
    },

}
console.log(person.calcAgen())