import { Component } from '@angular/core';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductType } from '../../types/products';



@Component({
  selector: 'app-main',
  imports: [FiltersComponent, ProductCardComponent, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  products: ProductType[] = [];
  isLoading = true;
  error: string | null = null;
  usersSub: Subscription | undefined;;

  constructor(private productsService:ProductsService ) {
  }

  ngOnInit() {
    this.usersSub = this.productsService.getProducts().subscribe({
      next: (data) => {
        this.productsService.setProducts(data)
        this.products = this.productsService.products
        
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Не удалось загрузить данные';
        this.isLoading = false;
      },
    });
  }
  ngOnDestroy() {
    if (this.usersSub) {
      this.usersSub.unsubscribe();
    }
  }
}
