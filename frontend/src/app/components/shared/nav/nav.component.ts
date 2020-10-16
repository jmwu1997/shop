import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  constructor(public loginService: LoginService, public router:Router) {   
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    //set button to log out
    let logOutBtn = document.getElementById('logout')
    if(logOutBtn){
      logOutBtn.addEventListener('click', () => {this.logOut()})
    }
  }

  isLoggedIn(){
    return this.loginService.isLoggedIn()
  }

  logOut(){
    this.loginService.logout()
  }

}
