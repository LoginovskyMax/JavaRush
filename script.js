// hello world!
console.log('hello, world');
{
    let a = 5
    // console.log(a);
    {
        
    }
}
const MY_FIRST_CONST = '14.08'
let myFirstVariable = 0.5
let integer = 6
// myFirstVariable = 'string'
let bool = true
let myNull = null
let myUndef
// console.log(myNull);
// console.log(myUndef);

let obj1 = { 
    name: 'Alice',
    surName: 'Pattison'
};
obj1.age = 23
let Pi = Math.PI
let x = 4.2
// console.log(obj1);
// console.log(myFirstVariable * myUndef);
// console.log(Math.PI);
// console.log(Math.round(x));
// console.log(Math.random());
// генератор слуаных чисел 1 - 10
// console.log(Math.floor(Math.random() * 10) + 1);

let myString = '2!4242  \'      \n первая переменная'
// отдельный симвоз из строки
// console.log(myString[1]);
let myString2 = `dgdfg
   ${Pi + Math.random()}`
//    console.log(myString2.length);
 let lowerCase = '       макс 123 456 макс      '
//  console.log(lowerCase.toUpperCase());
//  console.log(lowerCase.indexOf('МАКС'));
//  console.log(lowerCase.includes('макс'));
//  console.log(lowerCase.slice(0,4));
//  console.log(lowerCase.replaceAll('макс', 'катя'));
//  console.log(lowerCase);
//  console.log(lowerCase.trim());
//  console.log(typeof lowerCase);

 let isOdd = true
//  console.log(!isOdd);
//  console.log(isOdd && !isOdd);
//  console.log(!isOdd || isOdd);
//  console.log(5 === '5');

let caps = 29;
// if (caps >= 30) {
//   console.log("Вы можете купить Nuka-Cola");
// } else {
//   console.log("Нужны еще крышки от бутылок");
// }
// caps >= 30 ? 
// console.log("Вы можете купить Nuka-Cola") 
// : 
// console.log("Нужны еще крышки от бутылок");

let radiationLevel = 50;
// let caps = 100;
// if (radiationLevel > 100) {
// console.log("Вам нужна медицинская помощь, а не напиток!");
// } else if (caps >= 200 && radiationLevel > 50) {
// console.log("Купите Nuka-Cola Quantum для быстрого восстановления здоровья!");
// } else if (caps > 100) {
// console.log("Возьмите бутылочку классической Nuka-Cola.");
// } else if (caps >= 50) {
// console.log("Попробуйте Nuka-Cola Cherry.");
// } else {
// console.log("Извините, у вас недостаточно крышек.");
// }

// if (radiationLevel > 100) {
//     console.log("Вам нужна медицинская помощь, а не напиток!");
// }
// if (caps >= 200 && radiationLevel > 50) {
//     console.log("Купите Nuka-Cola Quantum для быстрого восстановления здоровья!");
// } 
// if (caps >= 100) {
//     console.log("Возьмите бутылочку классической Nuka-Cola.");
// } 
// if (caps >= 50) {
//     console.log("Попробуйте Nuka-Cola Cherry.");
// } else {
//     console.log("Извините, у вас недостаточно крышек.");
// }
let playerLevel = 'newbie';
let playerSkill = 'newbie'
// console.log(playerLevel === playerSkill);

switch (playerLevel.toLowerCase().trim()) {
    case 'newbie':
    console.log('Скидка 5% на все товары в магазине Nuka-Cola.');
    break;
    case 100:
        console.log('Скидка 100% на все товары в магазине Nuka-Cola.');
        break;
    case 'veteran':
    console.log('Скидка 10% на все оружие и броню.');
    break;
    case 'legend':
    console.log('Бесплатная бутылка Nuka-Cola Quantum!');
    break;
    default:
    console.log('У вас нет скидки.');
}
// console.log(123);

// for (let i = 10; i >= 1; i--) {
//     console.log(`Бутылка Nuka-Cola №${i}`);
// }
// let i = 0;

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     if (i === 5) {
//       console.log('break')
//       break
//     }
// }
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//     continue
//     }
//     console.log(i)
// }
let i = 0;
do {
  console.log(`Nuka-Cola ${i}`);
  i++;
} while (false);


while (false) {
    console.log(`Итерация номер ${i}`);
    i++
  }
