'use server'
import { cookies } from "next/headers"
 
export async function setCookies(token:string) {
     const cookieStore = await cookies()
     cookieStore.set('token', token)
}

export async function  deleteCookies(name: string)  {
     const cookieStore = await cookies()
     cookieStore.delete(name)
  }

export async function getCookies(name: string)  {
     const cookieStore = await cookies()
     return cookieStore.get(name)
  }