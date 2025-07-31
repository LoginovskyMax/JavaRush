import { useState } from "react"


const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<[{image:'', id: '', alias: ''}] | []>([])

    const getData = async () => {
       setIsLoading(true)
       const response = await fetch(`http://localhost:3000/food`)
       const dataResp = await response.json()
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