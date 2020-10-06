import { Injectable } from '@angular/core';
import { title } from 'process';
import { Product } from 'src/app/models/product'
import { HomeContent } from 'src/app/models/home'
import { CollectionContent } from 'src/app/models/collection'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    //         id   name         description            price  image url
    new Product(1, 'Product 1', 'Product 1 description', 221, 'http://placehold.it/600x600'),
    new Product(2, 'Product 2', 'Product 2 description', 102, 'http://placehold.it/600x600'),
    new Product(3, 'Product 3', 'Product 3 description', 103, 'http://placehold.it/600x600'),
    new Product(4, 'Product 4', 'Product 4 description', 104, 'http://placehold.it/600x600'),
    new Product(5, 'Product 5', 'Product 5 description', 105, 'http://placehold.it/600x600'),
    new Product(6, 'Product 6', 'Product 6 description', 106, 'http://placehold.it/600x600')
  ]

  homes: HomeContent[]=[
    //              id,name,subheading,description,image url
    new HomeContent(1, 'Heading 1','' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', 'http://placehold.it/1100x510'),
    new HomeContent(2, 'Heading 2','' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', 'http://placehold.it/1100x510'),
    new HomeContent(3, 'Heading 3','' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', 'http://placehold.it/1100x510'),
    new HomeContent(4, 'Feature 1','Subheading1' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.', 'http://placehold.it/600x600'),
    new HomeContent(5, 'Feature 2','Subheading2' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.', 'http://placehold.it/600x600'),
    new HomeContent(6, 'Feature 3','Subheading3' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.', 'http://placehold.it/600x600')
  ]

  collections: CollectionContent[]=[
    //              id,description,image url
    new CollectionContent(1, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', 'http://placehold.it/1200x550'),
    new CollectionContent(2, '', 'http://placehold.it/400x600'),
    new CollectionContent(3, '', 'http://placehold.it/400x600'),
    new CollectionContent(4, '', 'http://placehold.it/400x600'),
    new CollectionContent(5, '', 'http://placehold.it/400x600'),
    new CollectionContent(6, '', 'http://placehold.it/400x600'),
    new CollectionContent(7, '', 'http://placehold.it/400x600'),

  ]



  constructor() { }

  getProducts(): Product[] {
    //return products from api
    return this.products
  }

  getHomeContent(): HomeContent[] {
    //return home content from api
    return this.homes
  }

  getCollectionContent(): CollectionContent[] {
    //return collection content from api
    return this.collections
  }



}
