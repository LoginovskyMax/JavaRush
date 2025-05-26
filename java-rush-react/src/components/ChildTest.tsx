import React, {type FC } from 'react'

interface Props {
    counter: number
}

const checkProps = (prevProps:Props, nextProps:Props) => {
   if(nextProps.counter > 10) {
    return true
   }
   return false
}

const ChildTest:FC<Props> = ({counter}) => {
   console.log('render child');
   
    return (
        <div>
            <p>Тестовый дочерний компонент</p>
            <p>{counter}</p>
        </div>
    )
}

export default React.memo(ChildTest, checkProps) 