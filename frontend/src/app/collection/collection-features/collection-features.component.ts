import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CollectionContent } from 'src/app/models/collection';

@Component({
  selector: 'app-collection-features',
  templateUrl: './collection-features.component.html',
  styleUrls: ['./collection-features.component.css']
})
export class CollectionFeaturesComponent implements OnInit {

  collections: CollectionContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.collections = this.productService.getCollectionContent()
  }
}
