import React, {useCallback, useMemo, useState, type FC } from 'react'

import ChildTest from './ChildTest'


const RerenderTest:FC = () => {
    const user = {
        name: 'Alice',
        age: 25
    }
    const showLog = () => {
        console.log('вызов функции');
    }

    const memoShowLog = useCallback(showLog, [])
    const [likeCount, setLikeCount] = useState(0)
  
    const [counter, seCounter] = useState<number>(0)
    console.log('render parent');

    const memoUser = useMemo(() => user, [])
    
    return (
        <div>
            <p>Компонент блок</p>
            <p>{likeCount}</p>
            <button onClick={() => setLikeCount(likeCount+1)}>Поменять</button>
            <button onClick={() => seCounter(counter+1)}>Поменять дочерний счетчик</button>
            <ChildTest counter={counter} show={memoShowLog} user={memoUser}/>
        </div>
    )
}

export default RerenderTest