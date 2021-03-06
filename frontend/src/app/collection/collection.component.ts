import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CollectionContent } from 'src/app/models/collection'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collections: CollectionContent[] = []

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.collections = this.productService.getCollectionContent()
  }

}
