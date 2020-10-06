import { Injectable } from '@angular/core';
import { title } from 'process';
import { Product } from 'src/app/models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    new Product(1, 'Product 1', 'Product 1 description', 221, 'http://placehold.it/600x600'),
    new Product(2, 'Product 2', 'Product 2 description', 102, 'http://placehold.it/600x600'),
    new Product(3, 'Product 3', 'Product 3 description', 103, 'http://placehold.it/600x600'),
    new Product(4, 'Product 4', 'Product 4 description', 104, 'http://placehold.it/600x600'),
    new Product(5, 'Product 5', 'Product 5 description', 105, 'http://placehold.it/600x600'),
    new Product(6, 'Product 6', 'Product 6 description', 106, 'http://placehold.it/600x600')
  ]

  constructor() { }

  getProducts(): Product[] {
    //return products from api
    return this.products
  }
}
