
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { decrement, increment, setAge } from '../store/slices/counterSlice'
import './style.scss'
import { useEffect, useState } from 'react'


function StoreCounter() {
 const [inpAge, setInpAge] = useState(0)
 const { count} = useAppSelector((state) => state.counter)
 const dispatch = useAppDispatch()

 const incrementFunc = () => {
     dispatch(increment())
 }

 const onChange = (val :string) => {
    setInpAge(Number(val))
 }

const onClick = () => {
    if(inpAge > 5 && inpAge < 100){
    dispatch(setAge(inpAge))
    setInpAge(0)
    }
 }

 useEffect(() => {
  
 }, [])

  return (
    <div className='avatar'>
        <input type="number" value={inpAge} onChange={(e) => onChange(e.target.value)} />
        <button onClick={onClick}>+</button>
       <p>Глобальный счетчик = {count}</p>
       <button onClick={incrementFunc}>+</button>
       <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default StoreCounter