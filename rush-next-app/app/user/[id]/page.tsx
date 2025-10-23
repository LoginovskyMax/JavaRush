'use client'
 
import { useParams } from 'next/navigation'

export default function user() {
  const { id } = useParams()
  return (
      <section>
         пользователь {id}
      </section>
  )
}