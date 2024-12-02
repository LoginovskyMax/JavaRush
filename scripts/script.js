// hello world!

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    // обработка строк и значений
}
function checkAge (number) {
    if (number === 'XSS') {
        return 'Контент был зщаблокирован'
    } else {
        return number
    }
}
  
 let name = 'Max'
 let age = 'XSS'
//  console.log(`Шаблонная строка с ${name}, новая строка ${age}`);
// const result = tag`Шаблонная строка с ${name},новая строка ${age}`;
// console.log(`Шаблонная строка с ${name},новая строка ${checkAge(age)}`);

let car = {
    name: 'BMW',
    age: '2000',
    engine: 's54'
}
const parent = {
    greet() {
    console.log('Hello from parent');
}
};

 const child = {
    __proto__: parent
};
const child2= {
    __proto__: child
};

child.greet();
child2.greet();


let carAudi = {
    name: 'BMW',
    age: '2000',
    engine: 's54'
}
function CreateCar (name, age) {
    this.name = name
    this.age = age
}

class Venicle {
    constructor(wheels) {
        this.wheels = wheels
    }
    getWheels(){
       console.log('У этого т.с ' + this.wheels + ' колес');
    }
}
class Auto extends Venicle {
    constructor(wheels, hasBeep) {
        super(wheels)
        this.beep = hasBeep
    }
    sayBeep(){
        if(this.beep) {
            console.log('beeeeep');
        } else {
            console.log('Oups');
        }
    }
}
class Car extends Auto  {
    #metall = 'alliminuim'
    constructor(hasBeep, wheels, name, age, power) {
        super(wheels, hasBeep)
        this.name = name
        this.age = age
        this.power = power
        this.type = 'auto'
    }
    #changeMetall(metall){
       this.#metall = metall
   }
    getName(){
         console.log('Металл авто ' + this.#metall);
        //  this.#changeMetall('Железо')
    }
    getDinamic(weight){
        const dinamic = weight / this.power
        console.log('Мощность на килограмм ' + dinamic);
   }
}
let mers = new Car(true, 4,'Mers', 1992, 200 )
mers.name = 'Audi'
mers.getName()
mers.getDinamic(1500)
mers.getWheels()
mers.sayBeep()
console.log(mers);

let audi = new CreateCar(1992, 'Audi')

CreateCar.prototype.getName = function() {
    console.log('Название данного авттомбиля ' + this.name);
}
let arr = [1,2,3]

Array.prototype.sayHi = function () {
    console.log('Привет');
}
arr.sayHi()


// console.log(audi);
// audi.getName()

// function Person(name) {
//     this.name = name;
// }
//     Person.prototype.greet = function() {
//     console.log('Привет, меня зовут ' + this.name);
//     };
//     const john = new Person('John');
//     john.greet(); // Выведет: Привет, меня зовут John

// Базовый объект (родитель)
const animal = {
    eat() {
    console.log('Кушает');
    },
    sleep() {
    console.log('Спит');
    }
    };
    // Объект-наследник (ребенок)
// const dog = Object.create(animal);
    const dog = {}
    dog.__proto__ = animal
    dog.bark = function() {
    console.log('Гавкает');
};
animal.sleep()
dog.sleep = function() {
    console.log('Собака спит');
};
// console.log(animal.hasOwnProperty('eat'));
// console.log(dog.hasOwnProperty('eat'));


    // Использование
    // dog.eat(); // Выведет: Кушает
    // dog.sleep(); // Выведет: Спит
    // dog.bark(); // Выведет: Гавкает





