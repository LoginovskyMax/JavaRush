
import './App.css'
import { createContext, lazy, Suspense } from 'react'
import Block from './components/Block'
import Avatar from './components/CityList'
// import RerenderTest from './components/RerenderTest'
import authUser from './HOC/authUser'
import ChildrenComp from './components/childrenComp'
import UncontrolledForm from './components/UncontrolledForm'
import FormikComp from './components/FormikComp'
import StoreCounter from './components/StoreCounter'
import { useAppSelector } from './store/hooks'
// import CharactersLayout from './components/CharactersLayout'
const CharactersLayout = lazy(() => import('./components/CharactersLayout'))
import Pagination from './components/Pagination'
import Query from './components/Query'
import { useGetPokemonQuery } from './store/slices/apiSlice'
import { Routes, Route, Link } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage'
import ApolloPage from './components/ApolloPage'
import CityList from './components/CityList'


type Theme = 'light' | 'dark'
interface IThemeContext {
  theme: Theme,
  changeTheme: () => void
}

// const arr = [
//   {name: 'Alice'},
//   {name: 'Rodger'}
// ]

export const ThemeContext = createContext<IThemeContext | null>(null)


function App() {
  //  const { count, age } = useAppSelector((state) => state.counter)
  // const [theme, setTheme] = useState<Theme>('light')
  // const [mouseEntered, setMouseEntered] = useState(false)
  // const [inpValue, setInpValue] = useState('light')
  // const [error, setError] = useState(false)

  // const changeTheme = () => {
  //   setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  // }
  // const userName = 'Avatar'
  //  const color = 'blue'

  // const someNumber = useRef(22)

  // const block = useRef<HTMLButtonElement | null>(null)

  // const AuthComponent = authUser(Block)

  // const myClass = 'random-block'

  // const changeNumber = () => {
  //   someNumber.current++
  //   console.log(someNumber.current);
  //   console.log(block.current);
  //   if( block.current){
  //       block.current.style.backgroundColor = 'red'
  //   }
  // }

  // const onChangeFunc = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value.length);
  //   if(e.target.value.length < 10) {
  //      setInpValue(e.target.value)
  //      setError(false)
  //      return 
  //   }

  //   setError(true)
  // }

  return (
    <>
    {/* {!isLoading && <p>{pokemonData}</p>} */}
    <header className='header'>
   <Link to="/">Главная</Link> | 
    <Link to="/rick">Рик и Морти</Link> | 
    <Link to="/rick/others">Другое</Link> |
    <Link to="/form">Форма</Link> |
    <Link to="/apollo">Apollo</Link> |
     <Link to="/cityList">Города</Link>
    </header>
 
    <Suspense fallback={<p>ЗАгрузка......</p>}>
    <Routes>
      <Route path="/" element={ <Query />}/>
      <Route path="/form" element={ <FormikComp />}/>
       <Route path="/cityList" element={ <CityList name='Alice'/>}/>
      <Route path="/rick" element={<CharactersLayout />}>
         <Route path="others" element={ <StoreCounter />}/>
      </Route>
      <Route path="/rick/character/:id" element={ <CharacterPage />}/>
      <Route path="/apollo" element={ <ApolloPage />}/>
    </Routes>
    </Suspense>

    {/* <Pagination /> */}
    {/* <StoreCounter/> */}
    {/* <FormikComp /> */}
    {/* <UncontrolledForm /> */}
  
    </>
  )
}

export default App
