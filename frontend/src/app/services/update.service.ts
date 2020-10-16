import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  url = "http://localhost:3000/user/update"
  constructor(private _http: HttpClient) { }

  update(user: User){
    return this._http.post<any>(this.url, user)
  }
}