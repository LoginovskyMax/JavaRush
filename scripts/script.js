// hello world!

const car = {
    make: 'Toyota',
    model: 'Camry',
    // Вложенные объекты:
    owner: {
    name: 'John Doe',
    age: 42
    }
};

class CustomError extends Error {
    constructor(message) {
    super(message); // Вызываем конструктор
    this.name = 'CustomError';
    }
}

// console.log(car.make);
let result = null;

try{
    // result = car
    // if(!result){
    //     const myErr = new CustomError('result это не объект а null')
    //     throw myErr
    // }
console.log('da')
    console.log(result.model.toLowerCase());
} catch(error){
    console.error('Произошла ошибка:', error.message);
    console.log(error.name);
    // console.log(error.stack);
} finally {
    console.log('Результат:', result);
}

console.log('continue...');
delete car.owner
if(car.hasOwnProperty('owner')){
    console.log(car.owner.name);
}


function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.adress = city
}
// const person = new Person('Bob', 25, 'Krg');

const alice = {
    name: 'Alice2',
    age: 30,
    salary: 50000,
    address: {
        street: 'Main Street',
        city: 'New York',
        zip: '10001'
    },
    getSum(num1, num2) {
       return num1+num2
   },
}

let copiedAlice = {...alice}

// let name = alice.name
// let age = alice.age

// let {name, age : totalAge, salary = 200000, address : { street: mainStreet}} = alice
// function displayObject({name, salary}){
//     console.log(`${name} salary: ${salary}`);
// }
// displayObject(alice)
// console.log(name);
// console.log(totalAge);
// console.log(salary);
// console.log(mainStreet);

// let colors = ['red', 'green', 'blue'];
// let colors2 = ['brown', 'yellow'];
// let [firstEl, , thirdEl, ...restEl] = colors

// let copiedColors = [...colors,...colors2 ]

// copiedColors.push(1)
// console.log(colors);
// console.log(copiedColors);
// console.log(firstEl);
// console.log(thirdEl);
// console.log(restEl);


// const person = { 
//     greet(greeting, surName) {
//         console.log(`${greeting}  ${this.name} ${surName}`);
//     }
// };
// console.log(person["first name"]);
// person.age = 20
// person.male = 'Ж'
// person.getSum(2,3)
// person.greet('Привет дорогая')

// const myGreet = person.greet.bind(alice)

// person.greet.call(alice, 'Hi', 'Pattison')
// person.greet.apply(alice, ['Hi', 'Pattison'])
// myGreet('Привет дорогая')
// setTimeout(person.greet.bind(person,'Привет дорогая'), 2000);


// delete person.age
// console.log(person);
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// let keysArr = Object.keys(person)
// let valuesArr = Object.values(person)
// let entriesArr = Object.entries(person)
// console.log(keysArr);
// console.log(valuesArr);
// console.log(entriesArr);
// console.log('name' in person);
// console.log('first name' in person);
// console.log(person.hasOwnProperty('first3 name'));
// delete person.age
// console.log(person.age);




