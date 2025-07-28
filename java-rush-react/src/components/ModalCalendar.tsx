import { useEffect, useRef } from 'react'
import './style.scss'

interface Props {
    show: boolean
}

function ModalCalendar({show}:Props) {
  const calendar = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    let id = 0
    if(show) {
        id = setTimeout(() => {
            calendar.current?.scrollIntoView({block: 'center', behavior: 'smooth'})
        }, 800)
    }
    return (() => clearTimeout(id))
  }, [show])
  return (
    <div ref={calendar} className={`
        calendar
        ${show ?'calendar--show' : 'calendar--hide'}
        `
     }>
      <button className='calendar__close-btn'>X</button>
      <p>Даты</p>
    </div>
  )
}

export default ModalCalendar