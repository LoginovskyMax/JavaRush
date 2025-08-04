import {useState, type FC, type ReactNode } from 'react'

interface Props {
    render: (text:string, counter: number) => ReactNode
}

const ChildrenComp:FC<Props> = ({render}) => {
   const text = 'Children text'
   const [counter, setCounter] = useState(100)
   
    return (
        <div>
            <button onClick={() => setCounter(counter + 10)}>Повысить счетчик из дочернего компонента</button>
            {render(text, counter)}
       </div>
    )
}

export default ChildrenComp