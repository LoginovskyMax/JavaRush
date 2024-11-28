// hello world!

const now = new Date();
console.log(now);
function showName(name) {
    console.log(name);
}
// setTimeout(showName, 2000)
const IDTimer = setTimeout(() => {
    console.log('Boom!');
}, 2000)

const deactivated = true
if(deactivated){
    console.log('Перерезание провода');
    clearTimeout(IDTimer)
}


let counter = 0
let tik = true
const intervalId = setInterval(()=> {
    counter += 1
    if(counter === 4) {
        clearInterval(intervalId)
    }
    if (tik) {
        console.log('Тик');
    } else {
        console.log('Так');
    }
    tik = !tik
}, 1000)
 

// setTimeout(() => {
//     clearInterval(intervalId)
//     console.log('Время вышло');
// }, 4500)

// setTimeout(function() {

// }, 3000)
// console.log(now.toISOString());
// console.log(now.toLocaleDateString('ru-RU'));
// console.log(now.toLocaleDateString('ru-RU'));
// console.log(now.toLocaleTimeString('en-EN'));
// console.log(now.toLocaleString('ru-RU'));
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// ['январь','февраль',3,4]
const tomorrow = new Date(now.setDate(26)) 
console.log(tomorrow);

console.log(now.setTime(tomorrow));

// 1 января
// 01.0