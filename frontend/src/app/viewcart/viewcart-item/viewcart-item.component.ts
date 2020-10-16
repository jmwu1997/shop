import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
@Component({
  selector: 'app-viewcart-item',
  templateUrl: './viewcart-item.component.html',
  styleUrls: ['./viewcart-item.component.css']
})
export class ViewcartItemComponent implements OnInit {


  @Input() cartItem: any 

  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

  }

  handleRemoveFromCart(){
    this.msg.sendMsg(this.cartItem)
  }


}
