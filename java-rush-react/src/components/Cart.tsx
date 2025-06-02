import {useState, type FC} from 'react'

interface Props {
    character: {
        name: string
        image: string
    }
}

const Cart:FC<Props> = ({character}) => {
   const [counter, setCounter] = useState(100)
   
    return (
        <div>
            <p>{character.name}</p>
            <img src={character.image} alt="" width='100px'/>
            <button onClick={() => setCounter(counter + 10)}>Повысить счетчик из дочернего компонента</button>
           
       </div>
    )
}

export default Cart