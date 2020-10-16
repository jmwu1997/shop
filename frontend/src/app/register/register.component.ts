import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginUser = new User("","","",0,"",true)
  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginUser)
    this.registerService.register(this.loginUser)
      .subscribe(
        data =>{console.log("Success!", data);
        this.router.navigate(['login', {queryParams: { registered: 'true' } }]);
        },
        error => {console.error(error);
        alert(error.error);
        }
      )
     
  }

}
