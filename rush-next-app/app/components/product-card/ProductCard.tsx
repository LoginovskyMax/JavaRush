'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { ProductType } from '@/app/types/product';
import { FC } from 'react';
// import './ProductCard.css'

interface Props {
    product: ProductType
}



export const ProductCard:FC<Props> = ({product}) => {
  const router = useRouter()
        
  return (
    <div className="product-card">
        <img src={product.image} alt="SafAle US-05 Dry Ale Yeast" className="product-card__image"/>
        <div className="product-card__info">
            <h4 className="product-card__name">SafAle US-05 Dry Ale Yeast</h4>
                <p className="product-card__price">{product.price}</p>
                <p className="product-card__description">{product.desc}</p>
             </div>
    </div>
  )
}