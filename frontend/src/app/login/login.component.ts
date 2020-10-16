import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = new User("","","",0,"",true)
  constructor(private router: Router, private loginService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginUser)
    this.loginService.login(this.loginUser)
      .subscribe(
        data =>{
        sessionStorage.setItem("token", JSON.parse(data).token)
        sessionStorage.setItem("userName", JSON.parse(data).info.name)
        sessionStorage.setItem("userEmail", JSON.parse(data).info.email)
        sessionStorage.setItem("userAddress", JSON.parse(data).info.address)
        sessionStorage.setItem("userPassword", JSON.parse(data).info.password)
        console.log(data)
        this.router.navigate([''], {queryParams: { loggedin: 'true' } })
        },
        error => {console.error(error)
        alert(error.error)
        }
      )

    // this.http
    //   .get<any>('url', {observe: 'response'})
    //   .subscribe(resp => {
    //     console.log(resp.headers.get('X-Token'));
    //   });  
  }

}
