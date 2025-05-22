import {useEffect, useState, type FC } from 'react'

interface Props {
    name: string
}

const AvFcComp:FC<Props> = ({name}) => {

  const [character, setData] = useState({image: ''})
  const [load, setLoad] = useState(false)

  const getData = async () => {
     setLoad(true)
     const response = await fetch('https://rickandmortyapi.com/api/character')
     const dataResp = await response.json()
     await new Promise((res)=>{
      setTimeout(() => res(true), 3000)
     })
     console.log(dataResp);
     setData(dataResp.results[0])
     setLoad(false)
  }
  
  useEffect(() => {
      getData()
  }, [])


  return (
    <div>
       {load && <div >Идет загрузка... </div>}
       <p>Имя = {name}</p>
       {!load && <img src={character.image} alt="img" />}
    </div>
  )
}

export default AvFcComp
