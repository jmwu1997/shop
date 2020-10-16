import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000/user/register"
  constructor(private _http: HttpClient) { }

  register(user: User){
    return this._http.post<any>(this.url, user)
  }
}
