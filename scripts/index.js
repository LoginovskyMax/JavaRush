"use strict";
function getFirstEl(arr, arg) {
    console.log(arr.push(arg));
}
getFirstEl([1, 2, 3], 3);
getFirstEl(['2', '4'], 'sfsf');
getFirstEl([1, '4'], 66);
function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then((data) => console.log(data));
}
getData('ddg');
getData('ddg');
class DataContainer {
    constructor(initialData) {
        this.data = initialData;
    }
    getData() {
        return this.data;
    }
    setData(newData) {
        this.data = newData;
    }
}
const data = new DataContainer('2442');
data.setData("34535");
class ArrayUtils {
    // Метод для преобразования элементов массива
    transform(array, transformer) {
        return array.map(transformer);
    }
    // Метод для фильтрации с сохранением типа
    static filter(array, predicate) {
        return array.filter(predicate);
    }
}
function transformNumbers(item) {
    return item.toString();
}
const newInstance = new ArrayUtils();
const newArr = newInstance.transform([1, 2, 3, 4], transformNumbers);
console.log(newArr);
newArr.map((item) => +item * 2);
function doubleValue(value) {
    return value;
}
function doubleValueCop(value) {
    return value;
}
doubleValue([2, 4, 5,]);
// Функция с ограничением интерфейсом
function printName(item) {
    console.log(`Name: ${item.name}`);
}
function printNameCopy(item) {
    console.log(`Name: ${item.name}`);
}
const person = {
    name: "John",
    age: 25
};
const animal = {
    name: "Rex",
    type: "dog"
};
printName(person);
printNameCopy(person);
const model = 'power';
const theme = 'light';
function updateField(obj, key, value) {
    //  obj[key] = value;
    //  return obj
    return Object.assign(Object.assign({}, obj), { [key]: value });
}
let auto = {
    model: 'Mers',
    power: 200,
    maxSpeed: 250,
    config: {
        theme: 'dark',
        size: 'lg'
    }
};
const upgadedAuto = updateField(auto, 'power', 300);
upgadedAuto.power;
const copyCar = Object.assign({}, auto);
const copyCar2 = Object.assign({}, auto);
const copyCar3 = structuredClone(auto);
const copyCar4 = JSON.parse(JSON.stringify(auto));
console.log('parentOnj', auto);
copyCar3.maxSpeed = 10;
copyCar3.config.size = 'sm';
console.log('copyOnj', copyCar3);
const user = {};
// Создание формы редактирования пользователя
const newUser = {
    id: 1,
    age: 22,
    city: 'string'
};
function checkArg(arg) {
    if (typeof arg === 'string') {
        console.log('strinng');
        return;
    }
    if (Array.isArray(arg)) {
        console.log('arrr');
        arg.map(item => item * 2);
        return;
    }
    alert('Неверные данные фронт не виноват');
}
checkArg('dfdf');
checkArg([4]);
checkArg(undefined);
