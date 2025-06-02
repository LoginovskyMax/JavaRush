import reactLogo from '../assets/react.svg'
import  useFetch  from '../hooks/useFetch'

import './style.scss'
import useCounter from '../hooks/useCounter'
import { useEffect } from 'react'
import Cart from './Cart'

interface Props {
    name: string
}

function Avatar({name}:Props) {
  const {count, increment, decrement} = useCounter()
  const {data, isLoading, getData } = useFetch()

 useEffect(() => {
     getData(count)
 }, [])

  return (
    <div className='avatar'>
      
      <img src={reactLogo} className="logo react" alt="React logo" />
      {/* {isLoading ? <p>sdgdf</p> : <p>777</p>} */}
      {isLoading && <p>Loading...</p>}
      {data.length && data.map((character, index) => {
        return (
          <>
          <p>number in arr : {index}</p>
          <Cart key={character.name} character={character} />
          </>
        )
      })}

      
        <p>{name}</p>
        <p>{count}</p>
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
    </div>
  
  )
}

export default Avatar