function getFirstEl<G>(arr: G[], arg:G):void{
  console.log( arr.push(arg));
}
getFirstEl([1,2,3], 3)
getFirstEl(['2','4'], 'sfsf')
getFirstEl([1, '4'], 66)

type ApiResponse<T> = {
  success: boolean;
  data: T;
  timestamp: number;
}
interface User {
  id:number,
  name: string,
  age: number
}
interface Cart {
  id:number,
  title: string,
  price: number
}


function getData <T>(url:string){
  fetch(url)
  .then(response => response.json())
  .then((data:ApiResponse<T[]>) => console.log(data))
}

getData<User>('ddg')
getData<Cart>('ddg')

class DataContainer<T> {
  private data: T;
  constructor(initialData: T) {
  this.data = initialData;
  }
  getData(): T {
  return this.data;
  }
  setData(newData: T): void {
  this.data = newData;
  }
  }

const data = new DataContainer('2442')
data.setData("34535")

class ArrayUtils {
  // Метод для преобразования элементов массива
  transform<T, U>(array: T[], transformer: (item: T) => U): U[] {
      return array.map(transformer);
  }
  // Метод для фильтрации с сохранением типа
  static filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
      return array.filter(predicate);
  }
}

function transformNumbers(item:number) {
   return item.toString()
}

const newInstance = new ArrayUtils()
const newArr = newInstance.transform<number, string>([1,2,3,4], transformNumbers)
console.log(newArr);

newArr.map((item) => +item *2)

type Gen  = string | number | number[]

function doubleValue<T extends Gen>(value: T): Gen {
  return value;
}
function doubleValueCop(value: Gen): Gen {
  return value;
}
doubleValue([2,4,5,])

interface HasName {
   name: string;
}
  // Функция с ограничением интерфейсом
function printName<T extends HasName>(item: T): void {
  console.log(`Name: ${item.name}`);
  }
  interface SomeInterface {
    name:string
  }
function printNameCopy(item: SomeInterface): void {
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
 printName(person)

 printNameCopy(person)