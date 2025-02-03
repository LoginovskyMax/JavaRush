
interface Employee {
    name: string,
    salary: number,
    email?: string
}
interface User extends Employee {
    age: number
}

const user:User = {
    name: 'Alice',
    age: 25,
    salary: 25000,
}
user.email = '@sds'

interface MyDog {
    name: string,
    bark(a:string):void
}

interface MyDogObj {
    adress: string,
    age: number
}
interface Animal {
    run():void
}
class Dog implements MyDog, Animal {
  public name:string
  obj: MyDogObj
  constructor(obj:MyDogObj, name: string){
    this.name = name
    this.obj = obj
  }
  bark(a:string):void{
    console.log(a);
  }
  run():void{
    console.log('I can run');
  }
  bark2(a:string):void{
    console.log(a);
  }
}

const obj:MyDogObj ={
    adress: 'Almaty', 
    age: 5
}

const newDog = new Dog(obj, 'Barbos')

class BankAccount {
    public accountNumber: string;
    private balance: number;
    constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    }
    public getBalance(): number {
    return this.balance;
    }
    protected setBalance(newBalance: number): void {
    this.balance = newBalance;
    }
   showLog(num:number):number{
    return num*2
   }
}
class Bank extends BankAccount{
    constructor(accountNumber: string, balance: number){
        super(accountNumber, balance)
    }

    showLog(newBalance: number): number {
        console.log( newBalance);
        return newBalance
    }

}

abstract class Figure{
    abstract width: number
    abstract height: number
    abstract getSquare(): number
}


class Rectangle extends Figure{
    width: number
    height: number
    constructor(width:number, height:number){
      super()
      this.width = width
      this.height = height
    }
    getSquare(): number {
        return this.width * this.height
    }
    getPerimetr():number{
      return (this.width + this.height)*2
    }
}
const myFigure = new Rectangle(5, 5)