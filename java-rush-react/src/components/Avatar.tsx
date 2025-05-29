import reactLogo from '../assets/react.svg'
import { useEffect, useState } from 'react'
import  useFetch  from '../hooks/useFetch'

import './style.scss'
import useCounter from '../hooks/useCounter'

interface Props {
    name: string
}

function Avatar({name}:Props) {
  const {count, increment, decrement} = useCounter()
  const {data, isLoading, getData } = useFetch()

  return (
    <div className='avatar'>
      
      <img src={reactLogo} className="logo react" alt="React logo" />
      {isLoading && <p>Loading...</p>}
      {data.name && <div>
         <p>{data.name}</p>
         <img src={data.image} alt="img" />
        </div>}
      <button onClick={() => getData(count)}>Получить пользователя</button>
      
        <p>{name}</p>
        <p>{count}</p>
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
    </div>
  
  )
}

export default Avatar