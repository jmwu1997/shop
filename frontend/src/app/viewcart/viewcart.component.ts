import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from "src/app/services/messenger.service"

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  cartItems = []
  cartTotal= 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    // get from local storage
    if(localStorage.getItem('cartItems')!=null){
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
      this.cartItems.forEach(item => {
       this.cartTotal += (item.qty*item.price)
     })
     }
 
     //subscribe to observable
     this.msg.getMsg().subscribe((product: any) =>{
       this.RemoveFromCart(product)
     })

  }

  
  RemoveFromCart(product: any){
    // remove from cart by filter
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.productId && product.qty > 1){
        this.cartItems[i].qty--
      }else if(this.cartItems[i].productId === product.productId && product.qty == 1){
        this.cartItems = this.cartItems.filter((cartItems: any) => cartItems.productId !== product.productId)
      }
    }

    //calculate total
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty*item.price)
    })

    //store it back to local storage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }



}
