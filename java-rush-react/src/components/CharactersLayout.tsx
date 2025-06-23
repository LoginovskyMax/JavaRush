
import { useAppDispatch, useAppSelector } from '../store/hooks'
import './style.scss'
import { fetchCharacters } from '../store/slices/charactersSlise'
import { useEffect } from 'react'
import Character from './Charcter'
import Loader from './loader'
import Pagination from './Pagination'
import { Outlet } from 'react-router-dom'


function CharactersLayout() {
 const { characters, isLoading } = useAppSelector((state) => state.characters)
 const dispatch = useAppDispatch()


 useEffect(() => {
  if(!characters.length) {
    dispatch(fetchCharacters())
  }
 }, [])

  return (
    <div>
    <Outlet />
    <div className='layuot'>
        {isLoading && <Loader />}
        {characters.length && characters.map(item => <Character key={item.id} character={item} />)}
    </div>
    <Pagination />
    </div>

  )
}

export default CharactersLayout