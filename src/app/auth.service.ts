import { Injectable } from '@angular/core';
import {  User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }
  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN',"acess_token");
    localStorage.setItem('UserID',userInfo.email);
    return this.httpService.get<User>(environment.apiUrl+'/userdetails/'+userInfo.password)
  }
  public isLoggedIn(){
    return localStorage.getItem('ACESS_TOKEN')!==null;
  }
  public reservation(){
    return localStorage.getItem('ACCESS_TOKEN')!=null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
