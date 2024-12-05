// hello world!
console.log(window.innerWidth);

// setTimeout(()=>{
//     // window.close()
//     window.open('https://google.com')
// }, 5000)

console.log(navigator.userAgent);
console.log(navigator.language);

console.log(location.href);

// setTimeout(()=>{
//     history.forward()
// }, 3000)

console.log(document);
const h1 = document.getElementById('h1')

const liCollection = document.getElementsByClassName('list-item')
const liCollection2 = document.getElementsByTagName('li')

const header = document.querySelector('.header')
const li = document.querySelector('#uniqueLi')
// const newId = uniqueLi
// console.log(newId);
const liItems = document.querySelectorAll('.list-item')
li.textContent = 'уникальный  элемент ли'


const ul = li.parentNode

const newLi = document.createElement('li')
newLi.textContent = 'Новый элемент'
// ul.append(newLi)
// ul.prepend(newLi)
ul.insertBefore(newLi, li)
console.log(ul);
