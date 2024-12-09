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

const ul = document.querySelector('.list')
ul.style.backgroundColor = 'green'
// const computedStyles = window.getComputedStyle(ul)
// const backgroundColor = computedStyles.backgroundColor;
// console.log(`Текущий цвет фона: ${backgroundColor}`);

const main = document.querySelector('.main')
const copyUl = ul.cloneNode(true)
main.append(copyUl)
setTimeout(() => {
    copyUl.remove()
}, 3000);


function addLi(text, className) {
    const newLi = document.createElement('li')
    newLi.textContent = text
    // newLi.className = className
    // newLi.className = 'bold'
    newLi.classList.add(className)
    newLi.classList.add('bold')
    newLi.classList.remove('bold')
    newLi.classList.toggle('bold')
    let size = 10
    // setInterval(()=>{
    //     size++
    //     newLi.style.fontSize = size + 'px'
    // }, 1000)
    // console.log(newLi.classList.contains('bold'));
    ul.append(newLi)
}
addLi('new el from function', 'orange')

let counter = 0
// setInterval(() => {
//     counter++
//     addLi('new el №' + counter)
// }, 2000);

const newLi = document.createElement('li')
newLi.textContent = 'Новый элемент'
newLi.setAttribute('data-id', 4)
// console.log(newLi.hasAttribute('data-id'));
// console.log(newLi.getAttribute('data-id'));
// console.log(newLi.dataset.id);
// ul.append(newLi)
// ul.prepend(newLi)
ul.insertBefore(newLi, li)

const image = document.createElement('img');
image.setAttribute('src', './src/BMW.jpg')
main.prepend(image)

const secondImg = document.getElementById('image')
secondImg.src = './src/old_bmw.jpg'

const liArr = document.querySelectorAll('.list-item')
console.log(liArr);
for(let i = 0; i< liArr.length; i++){
    if(liArr[i].dataset.id == 1){
        liArr[i].classList.add('orange')
        liArr[i].style.removeProperty('border')
        console.log(liArr[i].textContent);
    }
}


