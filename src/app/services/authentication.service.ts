import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users=[
    {username:"admin", password:"1234",roles:['USER','ADMIN']},
    {username:"user1", password:"1234",roles:['USER']},
    {username:"user2", password:"1234",roles:['USER']}
  ];

  // @ts-ignore
  public isAuthenticated:boolean;
  // @ts-ignore
  public userAuthenticated;
  constructor() { }

    login(username:string,password:string){
      let user;
      this.users.forEach(u=>{
        if(u.username===username && u.password===password){
          user=u;
        }
      })
      if(user){
        this.isAuthenticated=true;
        this.userAuthenticated=user;
        localStorage.setItem("authenticatedUser",JSON.stringify(this.userAuthenticated));
      }
      else{
        this.isAuthenticated=false;
      }
    }
    loadUser(){
    let user=localStorage.getItem('userAuthenticated');
    if(user){
      this.userAuthenticated=JSON.parse(user);
      this.isAuthenticated=true;
    }
  }
  isAdmin(){
    if(this.userAuthenticated){
      return this.userAuthenticated.roles.indexOf("ADMIN")>-1;
    }
    else return false;
  }


  logout(){
    this.isAuthenticated=false;
    this.userAuthenticated=undefined;
    localStorage.removeItem('authenticatedUser');
  }
}
