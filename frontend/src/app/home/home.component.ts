import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HomeContent } from 'src/app/models/home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homecontent: HomeContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.homecontent = this.productService.getHomeContent()
  }

}
