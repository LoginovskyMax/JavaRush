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
