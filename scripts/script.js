// hello world!

let weaponArr = ['Меч', "Катана", "Световой меч",undefined, "нунчаки", null]

if(weaponArr.length) {
    console.log('weaponArr');
}

// for (let i = 0; i < weaponArr.length; i++) {
//     // код
//     showArguments(weaponArr[i])
// }


// console.log(weaponArr[0].toUpperCase());



let value = '44'

// console.log(Number(value));

// console.log(parseInt(value));

let num1 = 10;
let num2 = num1;
num2 = 20;
// console.log(num1);

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
// console.log(array1);

function showArguments (arrayItem) {
    if(arrayItem){
        console.log(arrayItem.toUpperCase());
    } else {
        console.log('Аргумент неопределен');
    }
}
const greet2 = function(id = 0,name) {
    // if(!name) {
    //     return 'Hi new user'
    // }
    return `Hi, ${name}${id}!`;
};
// console.log(greet2('max'));
// console.log(greet2(1,'max'));

const name1 = argument1 => {
    // function body
    console.log(argument1);
}

function showRestParams (...argArray) {
    // function body
    // console.log(arg1);
    // console.log(arg2);
    console.log(argArray[0]);
}
showRestParams(1, 2, 3,4,5,6)

function foo() {
    let num = 10; // Локальная переменная функции
    console.log('inside function:', num);
    }

let outerVar = 'Max'
function outer() {
    let outerVar = 'Я переменная из внешней функции (outer)';

    inner();
}
function inner() {
    // Доступ к переменной внешней функции достижим из внутренней функции
    console.log(outerVar); // Вывод: 'Я переменная из внешней функции (outer)'
}

inner()
outer()


