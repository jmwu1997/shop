import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from "src/app/services/messenger.service"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
 
  ];

  cartTotal= 0

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {

    //get local storage
    if(localStorage.getItem('cartItems')!=null){
     this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
     this.cartItems.forEach(item => {
      this.cartTotal += (item.qty*item.price)
    })
    }

    //subscribe to observable
    this.msg.getMsg().subscribe((product: Product) =>{
      this.addProductToCart(product)
    })
  }

  
  addProductToCart(product: Product){

    
    let item_exists= false

    // add item qty
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++
        item_exists=true
      }
    }

    // push new item if item doesnt exists
    if (item_exists == false){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
        img: product.imageUrl
      })
    }

    //calculate total
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty*item.price)
    })

    //stroge into local storage for future use
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

}
