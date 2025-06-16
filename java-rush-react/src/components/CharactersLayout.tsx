
import { useAppDispatch, useAppSelector } from '../store/hooks'
import './style.scss'
import { fetchCharacters } from '../store/slices/charactersSlise'
import { useEffect } from 'react'
import Character from './Charcter'
import Loader from './loader'


function CharactersLayout() {
 const { characters, isLoading } = useAppSelector((state) => state.characters)
 const dispatch = useAppDispatch()


 useEffect(() => {
    dispatch(fetchCharacters())
 }, [])

  return (
    <div className='layuot'>
        {isLoading && <Loader />}
        {characters.length && characters.map(item => <Character key={item.id} character={item} />)}
    </div>
  )
}

export default CharactersLayout