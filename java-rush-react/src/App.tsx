
import './App.css'
import { createContext, useState } from 'react'
import Block from './components/Block'
import Avatar from './components/Avatar'
import RerenderTest from './components/RerenderTest'


type Theme = 'light' | 'dark'
interface IThemeContext {
  theme: Theme,
  changeTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)


function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }
  const userName = 'Alice'


  return (
    <>
     <ThemeContext.Provider value={{theme, changeTheme}}>
         <Block name={userName}/>
     </ThemeContext.Provider>
     <Avatar name={userName}/>

      <div className="card">
        <RerenderTest />
      </div>
    </>
  )
}

export default App
