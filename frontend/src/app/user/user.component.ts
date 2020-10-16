import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UpdateService } from '../services/update.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  userEmail: string;
  userPassword: string;
  userAddress: string;
  userPhone: string;
  updated_user = new User("","",sessionStorage.getItem("userPassword"),0,"",true)

  constructor(private updateService: UpdateService) { }
  
  ngOnInit(): void {
    this.userName = sessionStorage.getItem("userName")
    this.userEmail = sessionStorage.getItem("userEmail")
    this.userPassword = sessionStorage.getItem("userPassword")
    this.userAddress = sessionStorage.getItem("userAddress")
  }
  
  onSubmit() {
    console.log(this.updated_user)
    this.updateService.update(this.updated_user)
      .subscribe(
        data =>{console.log("Success!", data);
        },
        error => {console.error(error);
        alert(error.error);
        }
      )
    alert("Please relog in order to take affect")
  }
  

  


}
