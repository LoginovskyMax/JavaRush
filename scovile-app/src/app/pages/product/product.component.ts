import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductType } from '../../types/products';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product:ProductType|null = null
  productId:string|null = null
  isLoading = false
  productSub: Subscription | undefined;;

  constructor(private productsService:ProductsService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product = this.productsService.getProductById(this.productId)

    if(!this.product) {
      this.getProduct()
    }
  }

  getProduct() {
      this.productSub = this.productsService.getOneProduct(this.productId).subscribe({
      next: (data) => {
        this.product = data
        
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

    ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }

}
