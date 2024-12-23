// hello world!
// let objName = {
//     age: 25
// }
let obj = {
    name: 'Alice',
    'undefined': 'max'
}

let booksMap = new Map()
booksMap.set( 'Tolstoi','Anna Karenina')
booksMap.set(obj,'My obj')
// console.log(booksMap.get( 'Tolstoi'));
// // booksMap.delete('Tolstoi')
// console.log(booksMap.get( obj));
// console.log(booksMap.has('Tolstoi'));
// console.log(booksMap.size);

// for (let [key, value] of booksMap) {
//     console.log(`${key.name || key} — ${value}`)
// }
let booksSet = new Set()
booksSet.add('Anna Carenina')
booksSet.add('Anna Carenina')
booksSet.add('Anna Carenina234')
console.log(booksSet.size);
booksSet.forEach(item => {
    console.log(item);
})
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const setArr = new Set(arrayWithDuplicates)
const withOutDuplikates = [...setArr]
// console.log(withOutDuplikates);
// console.log(arrayWithDuplicates);

function* numberGenerator() {
    yield 1;
    yield 2;
    return
    yield 3;
}
const generator = numberGenerator()
// console.log(generator.next());
// console.log(generator.next(5));
// console.log(generator.next());
// console.log(generator.next());
let ls = {
  name: 'Anna',
  age: 25
}
ls.alice = 'other'

localStorage.setItem('alice', 'Anna Larenina')
localStorage.setItem('alice', 'Alice second value')
localStorage.setItem('tolstoi', JSON.stringify(ls))
// console.log(localStorage.getItem('alice'));
// localStorage.removeItem('alice')
// console.log(localStorage.getItem('alice'));
// setTimeout(()=>{
//     localStorage.clear()
// }, 3000)
const fromLs = localStorage.getItem('tolstoi')
const normalLs = JSON.parse(fromLs)
document.cookie = "username=John Doe; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";
console.log(document.cookie);
const cookies = document.cookie.split(';')
for (let i = 0; i < cookies.length; i++) {
const cookie = cookies[i].trim();
if (cookie.startsWith("username=")) {
const username = cookie.substring("username=".length, cookie.length);
console.log(username); 1 // "John Doe"
}
}
