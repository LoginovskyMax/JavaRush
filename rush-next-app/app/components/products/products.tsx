'use client'
import { useEffect, useState } from "react"
import axiosInstance from "@/app/api/axios"
import './products.css'
import { ProductType } from "@/app/types/product"
import { ProductCard } from "../product-card/ProductCard"

 


export default function Products() {
const [character, setData] = useState<ProductType[]>([])
  const [load, setLoad] = useState(false)

  const getData = async () => {
     setLoad(true)
     const axiosResp = await axiosInstance.get('barley')
     setData(axiosResp.data)
     setLoad(false)
  }
  
  useEffect(() => {
      getData()
  }, [])
  return (
    <div>
       <section className="products-area product-grid-section">
            <div className="search-sort-bar">
                <div className="search-input-wrapper">
                    <input type="text" placeholder="Search" className="search-input"/>
                    <button className="search-button" aria-label="Search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="sort-options">
                    <button className="sort-button active-sort">
                        <span>New</span>
                    </button>
                    <button className="sort-button">Price ascending</button>
                    <button className="sort-button">Price descending</button>
                    <button className="sort-button">Rating</button>
                </div>
            </div>

            <div className="product-grid">
                  {load && <div >Идет загрузка... </div>}
                  {character && character.map((item) => <ProductCard product={item} key={item.id}/>)}
            </div>
      </section>
    </div>
  )
}