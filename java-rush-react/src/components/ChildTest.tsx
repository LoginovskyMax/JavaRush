import React, {type FC } from 'react'

interface Props {
    counter: number
    show: () => void
    user: {
        name: string
        age: number
    }
}

const ChildTest:FC<Props> = ({counter, show, user}) => {
   console.log('render child');
   
    return (
        <div>
            <p>Тестовый дочерний компонент</p>
            <p>{counter}</p>
            <p>{user.name}</p>
            <button onClick={show}>Вызов функции</button>
        </div>
    )
}

export default React.memo(ChildTest) 