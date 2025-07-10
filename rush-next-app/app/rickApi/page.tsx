'use client'
import { useEffect, useState } from "react"
import axiosInstance from "../api/axios"
interface iUser{
  id: string
  name: string
  image:string
}

interface iData {
  results: iUser[]
  info:{}
}

export default function RickApi() {
const [character, setData] = useState<iData | null>(null)
  const [load, setLoad] = useState(false)

  const getToken = () => {
    const token = localStorage.getItem('MyToken')
    return token
  }

  const createToken = () => {
    localStorage.setItem('accessToken', 'mySecretToken')
  }

  const getData = async () => {
     setLoad(true)
    //  const response = await fetch('https://rickandmortyapi.com/api/character',{
    //   headers: {
    //     Token: getToken() ? 'sfsfs' : undefined
    //   }
    //  })
    //  const dataResp = await response.json()
     const axiosResp = await axiosInstance.get('character', {
      headers: {
        token: '123123'
      }
     })
     await new Promise((res)=>{
      setTimeout(() => res(true), 3000)
     })
     console.log(axiosResp);
     setData(axiosResp.data)
     setLoad(false)
  }
  
  useEffect(() => {
      createToken()
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