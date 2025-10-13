import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketProduct } from '../../types/products';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket-product',
  imports: [],
  templateUrl: './basket-product.component.html',
  styleUrl: './basket-product.component.scss'
})
export class BasketProductComponent {
  @Input() product: BasketProduct| null = null;

  @Output() remove = new EventEmitter<string>();
  @Output() plus = new EventEmitter<string>();
  @Output() minus = new EventEmitter<string>();
  
    constructor(
    ) {}

  removeProduct() {
      if(!this.product) return

      this.remove.emit(this.product.id)
    }
  plusProduct() {
      if(!this.product) return

      this.plus.emit(this.product.id)
    }
  minusProduct() {
      if(!this.product) return

      this.minus.emit(this.product.id)
    }
}
