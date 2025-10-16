import { Injectable, signal } from '@angular/core';

const users = [
  {
    id:1,
    name: 'Alice',
    email: 'alice@gmail.com',
    password: '1234',
    token: 'alice-token'
  }
]

const USER_TOKEN = 'user-token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = ''
  user = signal<typeof users[0] | null>(null);

  constructor() { }

  getToken(){
    return this.token
  }

  async findUser(data: {email:string, password: string}){
    const user = users.find(item => item.email === data.email)
    if(!user){
      return {
        type: 'error',
        data: 'User not found'
      }
    }
    const isCorrectPassword = user.password === data.password

    if(!isCorrectPassword) {
      return {
        type: 'error',
        data: 'Wrong password'
      }
    } else {
      return {
        type: 'success',
        data: user.token
      }
    }
  }

  getUser(token:string) {
    const user = users.find(item => item.token === token)
    this.token = token
    localStorage.setItem(USER_TOKEN, token)

    if(user) {
      this.user.set(user)
    }
  }

  checkToken() {
    const token = localStorage.getItem(USER_TOKEN)

   if(token) {
    this.getUser(token)
   }
  }
}
