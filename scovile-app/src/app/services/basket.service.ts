import { Injectable } from '@angular/core';
import { BasketProduct, ProductType } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket:BasketProduct[] = []

  constructor() { }

  addToBasket(product:ProductType){
    const productIndex = this.basket.findIndex(item => item.id === product.id)

    if(productIndex !== -1){
        this.plusProduct(this.basket[productIndex].id)
    } else {
      const basketProduct:BasketProduct = {
        ...product,
        amount:1,
        totalPrice: product.price
      }
      this.basket.push(basketProduct)
    }
  }

  removeProduct(id:string) {
    this.basket = this.basket.filter(item => item.id !== id)
  }

  plusProduct(id:string) {
    const productIndex = this.basket.findIndex(item => item.id === id)
      
    this.basket[productIndex].amount++

    const newTotalPrice = this.basket[productIndex].amount * this.basket[productIndex].price

    this.basket[productIndex].totalPrice = newTotalPrice
  }

  minusProduct(id:string) {
    const productIndex = this.basket.findIndex(item => item.id === id)

    if(this.basket[productIndex].amount === 1) {
      this.removeProduct(this.basket[productIndex].id)
      return
    }
      
    this.basket[productIndex].amount--

    const newTotalPrice = this.basket[productIndex].amount * this.basket[productIndex].price

    this.basket[productIndex].totalPrice = newTotalPrice
  }
}
