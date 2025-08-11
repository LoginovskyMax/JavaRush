'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

interface Props {
    name: string
}


export default function Header({name}:Props) {
  const router = useRouter()
  const [buttonClicked, setButtonClicked] = useState(false)

  const callFunc = () => {
    console.log('call func');
    setButtonClicked(true)
  }
  return (
    <div>
       <a href="" data-testid='props-test'>{name}</a>
        Наш заголовок сайта \ 
        <Link href="/about" data-testid='link'>эбаут</Link> \
         <Link href="/user/34534">юзер</Link> \
         <Link href="/rules" data-testid='link-rules'>rules</Link>
         <button onClick={() => router.push('/')}>На главную</button>
         <button onClick={() => router.push('/rickApi')}>Рик и Морти</button>
         <button 
           onClick={callFunc} 
           data-testid='btn'>
               {buttonClicked ? 'Кликали' : 'Не кликали'}
          </button>
    </div>
  )
}