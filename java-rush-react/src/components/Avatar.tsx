import reactLogo from '../assets/react.svg'
import { useEffect, useState } from 'react'

import './style.scss'

interface Props {
    name: string
}

function Avatar({name}:Props) {
    const [likeCount, setLikeCount] = useState<number>(0)

     const [character, setCharacter] = useState({
       name: 'Alice',
       age: 25
     })

    const increment = () => {
       setLikeCount(likeCount + 1); // Простое обновление
    };

  const decrement = () => {
       setLikeCount(prevCount => prevCount - 1);
    };
  
  useEffect(() => {
      console.log('Count changed');
  }, [likeCount])

  return (
    <div className='avatar'>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <p>Имя: {name}</p>
    
        <button onClick={increment} >
          Лайк :  {likeCount   }
        </button>

        <button onClick={() => decrement()}>
          ДизЛайк
        </button>

        <button onClick={() => setCharacter(prev => ({...prev, age: prev.age +1}))}>
          Увеличить возраст персонажа
        </button>

        <p>{character.name}</p>
        <p>{character.age}</p>
    </div>
  
  )
}

export default Avatar