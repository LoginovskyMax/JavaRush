import {useContext, type FC } from 'react'
import { ThemeContext } from '../App'


interface Props {
    name: string
}

const BlockChild:FC<Props> = ({name}) => {

    const context = useContext(ThemeContext)
    return (
        <div>
            <p>Компонент блок ребенок</p>
            <p>{context?.theme}</p>
            <p>{name}</p>
            <button onClick={context?.changeTheme}>Поменять тему</button>
        </div>
    )
}

export default BlockChild