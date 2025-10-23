import Image from 'next/image'
import axiosInstance from '../api/axios'
interface iUser{
  id: string
  name: string
  image:string
}

interface iData {
  results: iUser[]
  info:{}
}

export default async function about() {
  return (
    <section>
        Страница эбаут
    </section>
  )
}