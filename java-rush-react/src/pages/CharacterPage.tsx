import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { useParams } from 'react-router-dom';

interface PageParams {
    id: string; // Всегда строка из useParams
}

const CharacterPage = () => {
     const { characters } = useAppSelector((state) => state.characters)
     const params = useParams<Readonly<PageParams>>()
     const [character, setCharacter] = useState<{image: string, name: string, id: number} | undefined>()
     const navigate = useNavigate()
     const location = useLocation()

     console.log(params);
     console.log(location);
     

    useEffect(() => {
      const current = characters.find(item => item.id === Number(params.id))
      if(!current) {
        navigate('/rick')
      }
      setCharacter(current)
    }, [])
     
    return (
        <div className='character'>
            <p>Страница подробной информации о персонаже</p>
            <p>id = {params.id}</p>
            {character && <div>
               <p>Имя персонажа:{character.name} </p>
               <p>Type {location.state?.type ? location.state?.type : 'Неизвестнен'}</p>
               <img src={character.image} alt="img" />
                </div>}
  
        </div>
    )
}

export default CharacterPage