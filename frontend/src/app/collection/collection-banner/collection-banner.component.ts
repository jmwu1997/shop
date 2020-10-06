import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CollectionContent } from 'src/app/models/collection';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.css']
})
export class CollectionBannerComponent implements OnInit {

  collections: CollectionContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.collections = this.productService.getCollectionContent()
    console.log(this.collections)
  }

}
