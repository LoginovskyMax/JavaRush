// hello world!
const myBtn = document.querySelector('#btn')
const main = document.querySelector('.main')

function onClickFunc(){
    console.log('Click! other func');
}


// myBtn.onclick = onClickFunc
// myBtn.onclick = ()=>{
//     console.log('other click');
// }
let counter = 0
myBtn.addEventListener('click', (event)=>{
    // console.log(event.target);
    event.stopPropagation()
    // event.stopImmediatePropagation()
    counter++
    console.log('Click!' + counter);
})
// main.addEventListener('click', (event)=>{
//     console.log('main');
// })
console.log(myBtn);
myBtn.addEventListener('click', onClickFunc)

// setTimeout(()=>{
//   console.log('Снятия обработчика события');
//   myBtn.removeEventListener('click', onClickFunc)
// }, 3000)

// const listArr = document.querySelectorAll('.item')
// for(let i = 0; i < listArr.length; i++){
//     listArr[i].addEventListener('click', (event)=>{
//         console.log(event.target.textContent);
//     })
// }

const parentUl = document.querySelector('#parentList')
// parentUl.addEventListener('click', (event) => {
//     if (event.target && event.target.matches('li.item')) {
//         console.log(`Clicked on item: ${event.target.textContent}`);
//     }
// })

parentUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked on item: ${event.target.textContent}`);
    }
})
const input = document.querySelector('#input')
// input.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })
// input.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

// Debouncing
function debounce(func, wait) {
  let timeoutId;
  return function(argument) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    // func.apply(this, arguments);
    func.call(this, argument);
    }, wait);
  };
}

const debouncingInput = debounce((event)=>{
    console.log(event.target.value);
}, 500)

input.addEventListener('input', debouncingInput)

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(50, 50, 100, 100);
ctx.fillStyle = 'green';
ctx.fill()
ctx.save()
ctx.translate(150, 0);
ctx.fillRect(50, 50, 100, 100);