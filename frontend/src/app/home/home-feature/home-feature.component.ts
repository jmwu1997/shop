import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HomeContent } from 'src/app/models/home';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.css']
})
export class HomeFeatureComponent implements OnInit {

  homecontent: HomeContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.homecontent = this.productService.getHomeContent()
  }
}
