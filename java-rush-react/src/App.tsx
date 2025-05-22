import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Avatar'
import Test from './components/test'
import AvFcComp from './components/AvFcComp'
import { useState } from 'react'
import ReducerTest from './components/ReducerTest'

function App() {
  const [showAvatar, setЫhowAvatar] = useState(false)


  const userName = 'Alice'

  const getUserName = (lastname:string) => userName + ' ' + '' + lastname

  return (
    <>
      <div>
        <ReducerTest/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Имя: {userName}</h1>
      <p>Возраст : {5*6 }</p>
      <p>Полное имя: {getUserName('Clinton')}</p>
      {showAvatar ? <Avatar name={'Max'}/> : <p>Аватар не найден</p>}

     <button onClick={() => setЫhowAvatar(prev => !prev)}>ShowAvatar</button>

      <Test name={'Test'}/>
      <AvFcComp name={userName} />
      <div className="card">
      </div>
    </>
  )
}

export default App
