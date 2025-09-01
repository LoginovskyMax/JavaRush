import { useState } from "react"
import axios from 'axios'

export type ProductItem = {
  title: string;
  id: number;
  price: number;
  rating: number;
  brand: string;
  images: string[]
}

type ProductsResponse = {
  products: ProductItem[]
}

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<ProductItem[] | []>([])

    const getData = async () => {
      let dataResp:ProductItem[] = []
       setIsLoading(true)
       try {
              const response = await axios.get<ProductsResponse>('https://dummyjson.com/products?limit=10')

              if(response.data.products) {
                 dataResp = (response.data.products as ProductItem[])
              }

       } catch (error:unknown) {
             console.log(error);
       }

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