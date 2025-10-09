import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ProductType } from '../types/products';

@Injectable({ providedIn: 'root'})

export class ProductsService {
  private url = 'http://localhost:3000/peppers'

  products:ProductType[] = []

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<ProductType[]>(this.url).pipe(
      catchError(error => {
        console.error('Ошибка в потоке данных:', error);
        return of([]);
      })
    )
  }

  getOneProduct(id:string | null): Observable<any> {
    return this.http.get<ProductType>(`${this.url}/${id}`).pipe(
      catchError(error => {
        console.error('Ошибка в потоке данных:', error);
        return of([]);
      })
    )
  }

  setProducts(data:ProductType[]) {
    this.products = data
  }

  getProductById(id:string|null) {
    if(!id) return null
    
    const product = this.products.find(item => item.id === id)

    return product || null
  }
}
