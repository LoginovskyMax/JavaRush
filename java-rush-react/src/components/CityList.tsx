import reactLogo from '../assets/react.svg'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchCity } from '../store/slices/ticketsSlice'

import './style.scss'
import { useEffect } from 'react'



function CityList() {
  // const {data, isLoading, getData } = useFetch()
   const { cityes: data, isLoading } = useAppSelector((state) => state.tickets)
   const dispatch = useAppDispatch()

 useEffect(() => {
   if(!data.length) {
     dispatch(fetchCity())
   }
 }, [])

  return (
    <div className='avatar'>
      <img src={reactLogo} className="logo react" alt="React logo" />
      {isLoading && <p>Loading...</p>}
      {!isLoading && data.map((city, index) => {
        return (
          <>
          <p>number in arr : {index}</p>
          <p>Город - {city.name} - {city.alias}</p>
          </>
        )
      })}
    </div>
  
  )
}

export default CityList