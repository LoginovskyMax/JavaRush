'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function Header() {
  const router = useRouter()
  return (
    <div>
        Наш заголовок сайта \ 
        <Link href="/about">эбаут</Link> \
         <Link href="/user/34534">юзер</Link> \
          <Link href="/rules">rules</Link>
         <button onClick={() => router.push('/')}>На главную</button>
          <button onClick={() => router.push('/rickApi')}>Рик и Морти</button>
    </div>
  )
}