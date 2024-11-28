// функции высшего порядка
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((item, index, arr)=>{
//    console.log(item);
//    console.log(index);
//    console.log(arr);
// })

const squared = numbers.map(number => {
    return number * number
});

console.log(squared);

let click = 3

const evenNumbers = numbers.filter(number => number !== click);
console.log(evenNumbers);

const sum = numbers.reduce((accum, number) => accum + number, 0);
const objFromArr = numbers.reduce((accum, number, i) => {
    accum[i] = number
    return accum
}, {});
// console.log(objFromArr);
// console.log(sum);
// accum + 1
// 1 + 2
// 3 + 3
// 6 + 4

// Каррирование
function multiply(a) {
    return function(b) {
    return a * b;
    };
}

const multiplyByTwo = multiply(2);
// console.log(multiplyByTwo(5)); // Выведет: 10
const summary = multiply(2)(5);

// function getDiscount(price, discount) {
//     return  price * discount
// }
// console.log(getDiscount( 1000, 0.25));
// каррирование функции
function getDiscount(discount) {
    discount = discount / 100
    return (price) => {
        return price * discount
    }
}

const twentyDiscount = getDiscount(20)
const thirtyDiscount = getDiscount(35)
// console.log(getDiscount(12)(1000));
// console.log(twentyDiscount(1000));
// console.log(thirtyDiscount(1000));

// замыкания
function createCounter() {
    let count = 0;
    // Лексическое окружение внешней функции
    return function() {
    // Внутренняя функция - замыкание
      count++;
    // Обращение к переменной 'count' из внешнего контекста
      return count;
    };
}
    const counter = createCounter();
    const counter2 = createCounter();
    // 'counter' теперь ссылается на замыкание
    console.log(counter()); // Выводит: 1
    console.log(counter()); // Выводит: 2
    console.log(counter()); // Выводит: 3
    console.log(counter2());
    console.log(counter());

    // Пример с изменением глобального состояния:
function sayHello() {
    // let message = 'Hi'
    return function(name) {
    return message + name + '!';
    };
}
const result = sayHello();
let message = 'Howdy, ';
console.log(result('Alice')); // "Howdy, Alice!"

message = 'Good morning, ';
console.log(result('Alice')); // "Good morning, Alice!"

function createPerson(name, age) {
    let _name = name; // Приватная переменная _name
    let _age = age; // Приватная переменная _age
    return { // Возвращаемый объект с методами доступа
    getName: function() {
    return _name;
    // Доступ к приватной переменной _name через метод
    },
    getAge: function() {
    return _age;
    // Доступ к приватной переменной _age через метод
    },
    setName: function(newName) {
    _name = newName;
    // Установка нового значения _name
    },
    setAge: function(newAge) {
    _age = newAge;
    // Установка нового значения _age
    }
    };
}

const person = createPerson('Max', 32)
// console.log(person.getAge());
// person.setName('Maximuus')
// console.log(person.getName());

function memoize(fn) {
    const cache = {}; // Инициализация кеша
    return function(...args) { 
    // Возвращаемая функция с использованием замыкания
    const key = JSON.stringify(args);
    // Создание ключа на основе входных аргументов
    // {
    //     '5': 10,
    //     '7': 14
    // }
    if (cache[key]) {
    // Проверка наличия результата в кеше
    return cache[key];
    // Возврат результата из кеша
    }
    const result = fn(...args);
    // Вычисление результата, если его нет в кеше
    cache[key] = result;
    // Сохранение нового результата в кеш
    return result; // Возврат результата
    };
    }


function slowFunction(num) {
    console.log('Computing...');
    return num * 2;
}
    const memoizedFunction = memoize(slowFunction);
    // console.log(memoizedFunction(5));
    // Выводит: Computing... 10
    // console.log(memoizedFunction(5));

    // console.log(memoizedFunction(7));
    // console.log(memoizedFunction(7));
    // console.log(memoizedFunction(5));




