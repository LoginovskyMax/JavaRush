import Image from 'next/image'
import axiosInstance from '../api/axios'
interface iUser{
  id: string
  name: string
  image:string
}

interface iData {
  results: iUser[]
  info:{}
}

export default async function about() {
    // const response = await fetch(`https://rickandmortyapi.com/api/character`)
    // const data:iData = await response.json()
    const axiosResp = await axiosInstance.get('character')

    console.log(axiosResp.data);
    const data:iData = axiosResp.data
  return (
    <section>
        Страница эбаут
        {data && data.results.map((item) => <div  key={item.id}>
          <p>Name: {item.name}</p>
          <Image       
           src={item.image}
           width={300}
           height={300}
           alt="Picture of the author"/>
        </div>)}
    </section>
  )
}