import { useState } from "react"

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setdata] = useState({image:'', name: ''})

    const getData = async (id: number) => {
       setIsLoading(true)
       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
       const dataResp = await response.json()
       await new Promise((res)=>{
         setTimeout(() => res(true), 2000)
       })
       console.log(dataResp);
       setIsLoading(false)
       setdata(dataResp)
    }
 
    return {
      data,
      isLoading,
      getData
    }
}

export default useFetch