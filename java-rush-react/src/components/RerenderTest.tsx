import React, {useState, type FC } from 'react'

import ChildTest from './ChildTest'


const RerenderTest:FC = () => {
    const [likeCount, setLikeCount] = useState<number>(0)
    const [counter, seCounter] = useState<number>(0)
    console.log('render parent');
    
    return (
        <div>
            <p>Компонент блок</p>
            <p>{likeCount}</p>
            <button onClick={() => setLikeCount(likeCount+1)}>Поменять</button>
            <button onClick={() => seCounter(counter+1)}>Поменять дочерний счетчик</button>
            <ChildTest counter={counter} />
        </div>
    )
}

export default RerenderTest