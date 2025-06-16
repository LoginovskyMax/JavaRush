import { type FC } from 'react'
import './style.scss'

interface Props {
    character: {
        name: string,
        id: number,
        image:string
    }
}

const Character:FC<Props> = ({character}) => {
    return (
        <div className='character'>
            <p>{character.id}</p>
            <p>Имя персонажа: {character.name}</p>
            <img src={character.image} alt="img" />
            <button>Подробнее</button>
        </div>
    )
}

export default Character