import { type FC } from 'react'
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
    character: {
        name: string,
        id: number,
        image:string
    }
}

const Character:FC<Props> = ({character}) => {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate(`character/${character.id}`, {
            replace: true,
            state: {type: 'human'}
        })
    }
    return (
        <div className='character'>
            <p>{character.id}</p>
            <p>Имя персонажа: {character.name}</p>
            <img src={character.image} alt="img" />
            <Link to={`character/${character.id}`} target='_blank'>Подрьбнее</Link>
            <button onClick={navigateTo}>Подробнее</button>
        </div>
    )
}

export default Character