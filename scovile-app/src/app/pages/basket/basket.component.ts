import { Component } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { BasketProduct } from '../../types/products';
import { NgFor } from '@angular/common';
import { BasketProductComponent } from '../../components/basket-product/basket-product.component';

@Component({
  selector: 'app-basket',
  imports: [NgFor, BasketProductComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  products:BasketProduct[] = []

  constructor(
    private basketService: BasketService
  ) {
    this.products = this.basketService.basket
  }

  removeProduct(id:string) {
      this.basketService.removeProduct(id)
      this.products = this.basketService.basket
    }

  plusProduct(id:string) {
      this.basketService.plusProduct(id)
      this.products = this.basketService.basket
    }
    
  minusProduct(id:string) {
      this.basketService.minusProduct(id)
      this.products = this.basketService.basket
    }
 
  addToBasket() {
    // if(!this.product) return

    // this.basketService.addToBasket(this.product)
  }

}
