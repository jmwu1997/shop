import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  productList: Product[] = []
  
  

  constructor(private productService: ProductService) {
      function myFunction() {
        this.productList.sort(function(a, b){
          return a.price - b.price;
      });
      
      }
  }



  ngOnInit(): void {
    this.productList = this.productService.getProducts()

    let button0 = document.getElementById('reset')
    button0.addEventListener("click", () => { this.productList.sort(function(a, b){
    return a.id - b.id;});});

    let button1 = document.getElementById('sortlowtohigh')
    button1.addEventListener("click", () => { this.productList.sort(function(a, b){
    return a.price - b.price;});});

    let button2 = document.getElementById('sorthightolow')
    button2.addEventListener("click", () => { this.productList.sort(function(a, b){
    return b.price - a.price;});});

    console.log(this.productList)
  }

}
