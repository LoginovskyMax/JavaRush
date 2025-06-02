
import './App.css'
import { createContext, useRef, useState } from 'react'
import Block from './components/Block'
import Avatar from './components/Avatar'
// import RerenderTest from './components/RerenderTest'
import authUser from './HOC/authUser'
import ChildrenComp from './components/childrenComp'


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

const AGE_FULL = 18

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mouseEntered, setMouseEntered] = useState(false)
  const [inpValue, setInpValue] = useState('light')

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
    console.log(e.target.value);
    setInpValue(e.target.value)
  }

  return (
    <>
     <div onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)} 
     className={
       mouseEntered ? myClass : ''
     }
     style={{color: mouseEntered ?  color : 'green'}}
     >
      randomm text
     </div>

     <input type="text" placeholder='your text here' value={inpValue} onChange={onChangeFunc}  />
     <p>Значение инпута: {inpValue}</p>

     <ThemeContext.Provider value={{theme, changeTheme}}>
         <Block name={userName}/>
     </ThemeContext.Provider>
    <button onClick={changeNumber}>Изменить number {someNumber.current}</button>
    <button ref={block} onClick={() => console.log(someNumber.current)}>show number</button>
     {arr.map(obj => <p key={obj.name}>Name: {obj.name}</p>)}
     <Avatar name={userName}/>
     <AuthComponent name='Alice'/>
     <ChildrenComp render={
      (text, counter) => {
        return (
          <div>
            <p>{text}</p>
            <p>Счетчик: {counter}</p>
            <p>Some text from parent</p>
          </div>
        )
      }
     }/>



      {/* <div className="card">
        <RerenderTest />
      </div> */}
    </>
  )
}

export default App
