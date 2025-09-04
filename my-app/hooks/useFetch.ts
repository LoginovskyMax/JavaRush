import { useState } from "react"
import axios from 'axios'

export type ProductItem = {
  title: string;
  id: number;
  price: number;
  rating: number;
  brand: string;
  images: string[]
  description: string
}

type ProductsResponse = {
  products: ProductItem[]
}



const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<ProductItem[] |ProductItem | null>(null)

    const getData = async ({id = '', query = ''}) => {
       let dataResp:ProductItem[] |ProductItem | null  = null
       setIsLoading(true)

       try {
    
              let url = 'https://dummyjson.com/products'

              if(id){
                  url = url + '/' + id
              }

              if(query){
                  url = url + '?' + query
              }

              const response = await axios.get(url)

              if((response.data as ProductsResponse).products) {
                 dataResp = ((response.data as ProductsResponse).products as ProductItem[])
              } else {
                  dataResp = response.data as ProductItem
              }

       } catch (error:unknown) {
             console.log(error);
       }

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