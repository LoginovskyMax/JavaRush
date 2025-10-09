import { Component } from '@angular/core';
import { Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../../types/products';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: ProductType| null = null;

  private router = inject(Router)

  goToProductPage(){
    this.router.navigate(['/product', this.product?.id])
  }
}
