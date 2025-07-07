'use client'
import CustomLayout from '@/app/customLayout'
 
import { useParams } from 'next/navigation'

export default function user() {
  const { id } = useParams()
  return (
    <CustomLayout>
      <section>
         пользователь {id}
      </section>
    </CustomLayout>
  )
}