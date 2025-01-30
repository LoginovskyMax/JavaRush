import { addNumber } from './addFunction';
import { addNumber2 } from './newScript';
let myString = 'Alice';
let muNumber = 5;
myString = 'ali';
const myObj = {
    name: "Alce",
    age: 5,
    adress: 'Almaty'
};
function writeObj(obj) {
    const answer = obj.name + obj.age;
    return answer;
}
console.log(writeObj(myObj));
console.log(addNumber2());
console.log(addNumber(1, myString));
// console.log(addNumber(1, 12));
// console.log(addNumber(5, 9));
