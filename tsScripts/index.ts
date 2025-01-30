// import {addNumber} from './addFunction'
// import {addNumber2} from './newScript'

let myString:string = 'Alice'
let muNumber = 5
let myNull:null

myNull = null

let list: 'south' | 'north' | 'west' | 'east'

list = 'south'

let numbersArr: number[] = []
numbersArr.push(5)
let stringArr: Array<string> = []
stringArr.push('4')

let mixedArr:(number | undefined)[] = []
let mixArr: Array<string | null> = []
mixArr.push(null)

const readonlyNumbers: ReadonlyArray<number> = [1, 2, 3];
readonlyNumbers.map(item => {
    console.log(item);
})

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let arrItem = matrix[2][0]

type Cell = string | number | null;
let mixeArrCell: Cell[] = []
mixeArrCell.push(null)
let mixedVal: Cell = '122525'
mixedVal = 6

let tuple: [number, string|null] = [1, '4']
tuple.push(6)
console.log(tuple);
tuple[1]
const [first, second] = tuple

// interface User {
//     name: string;
//     age: number;
//     // Опциональное свойство
//     // email?: string;
//     email: string | undefined;
//     // Неизменяемое свойство
//     readonly id: number;
// }
type Product = {
    name: string;
    age: number;
    // Опциональное свойство
    // email?: string;
    email?: string;
    // Неизменяемое свойство
    readonly id: number;

}

const user:Product = {
    name: 'Alice',
    age: 25,
    id: 7,
}

function createUser(
    name: string, // Обязательный параметр
    age?: number, // Опциональный параметр
    role: string = 'user', // Параметр со значением по умолчанию
    ...skills: string[] // Rest-параметр
    ) {
        console.log(role);
    }

    createUser('Alice', 4)

myString = 'ali'

interface User {
   name: string,
   age: number
}


type Developer = [string, number]
const aliceDev:Developer = ['Alice', 30]

const myObj = {
    name: "Alce",
    age : 5,
    adress: 'Almaty'
}

function writeObj(obj:User):string{
    const answer = obj.name + obj.age
    return answer
}

type myFunc = (a:number, b:string) => string

interface myFunc2 {
  (a: number, b:string): void
}

interface User{
    adress: 'Almaty',
    addNumber:myFunc
}
const newUser:User = {
    adress: 'Almaty',
    name: 'Alice',
    age:25,
    addNumber(a, b) {
         console.log(a);
         console.log(b);
         return b
    }

}

newUser.addNumber(5, '11').toUpperCase()

type CheckFunc = (a:boolean) => boolean | never

function checkErrr(a: boolean){
    if(a){
        return true
    } else {
        throw new Error('Error');
    }
}
const newFunc:CheckFunc = checkErrr


// console.log(writeObj(myObj));
// console.log(addNumber2());
// console.log(addNumber(1, myString as unknown as number));

// console.log(addNumber(1, 12));
// console.log(addNumber(5, 9));