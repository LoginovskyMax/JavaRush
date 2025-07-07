'use client'
import { useEffect, useState } from "react"
interface iUser{
  id: string
  name: string
  image:string
}

interface iData {
  results: iUser[]
  info:{}
}

export default function NotFound() {
const [character, setData] = useState<iData | null>(null)
  const [load, setLoad] = useState(false)

  const getData = async () => {
     setLoad(true)
     const response = await fetch('https://rickandmortyapi.com/api/character')
     const dataResp = await response.json()
     await new Promise((res)=>{
      setTimeout(() => res(true), 3000)
     })
     console.log(dataResp);
     setData(dataResp)
     setLoad(false)
  }
  
  useEffect(() => {
      getData()
  }, [])
  return (
    <div>
      {load && <div >Идет загрузка... </div>}
     {character && character.results.map((item) => <div  key={item.id}>
          <p>Name: {item.name}</p>
          <img       
           src={item.image}
           width={300}
           height={300}
           alt="Picture of the author"/>
        </div>)}
    </div>
  )
}