import {useContext, type FC } from 'react'
import BlockChild from './BlockChild'
import { ThemeContext } from '../App'

interface Props {
    name: string
}

const Block:FC<Props> = ({name}) => {
 const context = useContext(ThemeContext)
    return (
        <div>
            <p>Компонент блок</p>
            <p>{context?.theme}</p>
            <BlockChild name={name} />
        </div>
    )
}

export default Block