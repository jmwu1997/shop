import { Component, OnInit ,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HomeContent } from 'src/app/models/home';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  homecontent: HomeContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.homecontent = this.productService.getHomeContent()
  }

}
