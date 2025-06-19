
import './App.css'
import { createContext, useRef, useState } from 'react'
import Block from './components/Block'
import Avatar from './components/Avatar'
// import RerenderTest from './components/RerenderTest'
import authUser from './HOC/authUser'
import ChildrenComp from './components/childrenComp'
import UncontrolledForm from './components/UncontrolledForm'
import FormikComp from './components/FormikComp'
import StoreCounter from './components/StoreCounter'
import { useAppSelector } from './store/hooks'
import CharactersLayout from './components/CharactersLayout'
import Pagination from './components/Pagination'
import Query from './components/Query'
import { useGetPokemonQuery } from './store/slices/apiSlice'


type Theme = 'light' | 'dark'
interface IThemeContext {
  theme: Theme,
  changeTheme: () => void
}

const arr = [
  {name: 'Alice'},
  {name: 'Rodger'}
]

export const ThemeContext = createContext<IThemeContext | null>(null)


function App() {
   const { count, age } = useAppSelector((state) => state.counter)
  const [theme, setTheme] = useState<Theme>('light')
  const [mouseEntered, setMouseEntered] = useState(false)
  const [inpValue, setInpValue] = useState('light')
  const [error, setError] = useState(false)

  const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }
  const userName = 'Avatar'
   const color = 'blue'

  const someNumber = useRef(22)

  const block = useRef<HTMLButtonElement | null>(null)

  const AuthComponent = authUser(Block)

  const myClass = 'random-block'

  const changeNumber = () => {
    someNumber.current++
    console.log(someNumber.current);
    console.log(block.current);
    if( block.current){
        block.current.style.backgroundColor = 'red'
    }
  }

  const onChangeFunc = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.length);
    if(e.target.value.length < 10) {
       setInpValue(e.target.value)
       setError(false)
       return 
    }

    setError(true)
  }

    const {data: pokemonData, isError, isLoading, refetch} = useGetPokemonQuery('pikachu')

  return (
    <>
    {!isLoading && <p>{pokemonData}</p>}
    <Query />
    <CharactersLayout />
    <Pagination />
    {/* <StoreCounter/> */}
    {/* <FormikComp /> */}
    {/* <UncontrolledForm /> */}
  
    </>
  )
}

export default App
