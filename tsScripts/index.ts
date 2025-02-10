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


 type CarKeys = keyof Car

 const model:CarKeys = 'power'

 type Colors = 'white' | 'black' | 'blue'

 interface Car {
  model: string,
  power: number,
  maxSpeed: number
  config: Config
 }
 interface Config {
  theme: 'light' | 'dark';
  size: 'sm' | 'md' | 'lg';
 }

 interface ComponentProps {
     id: number;
     config: Config
     data: string[];
  }
  type congigTheme = ComponentProps['config']['theme']
  const theme:congigTheme = 'light'

  interface UserAlice {
    id: number;
    name: string;
    age: number;
    email: string;
  }
    // Создаем утилиту для получения типа значения по ключу
  type ValueType<T, K extends keyof T> = T[K];

  function updateField<T extends object, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
    ): T {
    //  obj[key] = value;
    //  return obj
     return {...obj, [key]: value}
  }

  let auto:Car = {
   model: 'Mers',
   power: 200,
   maxSpeed: 250,
   config: {
    theme: 'dark',
    size: 'lg'
   }
  }
  const upgadedAuto = updateField(auto, 'power', 300 )
  upgadedAuto.power
  
  const copyCar = {...auto}
 
  const copyCar2 = Object.assign({}, auto)

  const copyCar3 = structuredClone(auto)

  const copyCar4 = JSON.parse(JSON.stringify(auto))

  console.log('parentOnj',auto);
  copyCar3.maxSpeed = 10
  copyCar3.config.size = 'sm'
  console.log('copyOnj',copyCar3);

  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    city: string
  }
  const user:User = {\

  }

  type UserEditForm = Partial<User>;
// Выбор только контактных данных
  type UserContacts = Pick<User, 'email' | 'name'>;
// Создание словаря пользователей
   type UsersDict = Record<string, User>;

   type UsersDict2 = Omit<User, 'email' | 'name' >;
    // Создание формы редактирования пользователя

const newUser:UsersDict2={
  id: 1,
  age: 22,
  city: 'string'
}

function checkArg(arg:string| undefined | Array<number>): void {
   if( typeof arg === 'string' ) {
     console.log('strinng');
     return
   }
   if (Array.isArray(arg)) {
    console.log('arrr');
    arg.map(item => item*2)
    return
   }
   alert('Неверные данные фронт не виноват')

}
checkArg('dfdf')
checkArg([4])
checkArg(undefined)



