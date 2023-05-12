import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9595"

  constructor(private http:HttpClient) { }
  // calling the server to generate token
  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`, credentials)
    }


  // @ts-ignore
  loginUser(token){
    localStorage.setItem("token",token)
    return true;
  }
  // to check that is logged in or not
  // @ts-ignore
  private token: Boolean | boolean;
  isLoggedIn(){
    localStorage.getItem("token");
    // @ts-ignore
    {
      return false;
    }else{
      return true;
    }
  }
  // for logout of the user
  logout(){
    localStorage.removeItem('token')
    return true;
}
  getToken(){
    return localStorage.getItem("token");
  }
}
