import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any
  url = "http://localhost:3000/user/login"
  constructor(private _http: HttpClient) { }

  //user login
  login(user: User){
    this.data = this._http.post(this.url,user,{responseType:'text'})
    return this.data
  }  

  //user logout
  logout() {
    sessionStorage.removeItem("token")
  }

  //is logged in
  isLoggedIn(): boolean{
    
    if (sessionStorage.getItem('token') == null) {
      return false
    }
    else {
      return true
    }
  }
}
