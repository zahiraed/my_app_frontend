import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'myApp-web-v1';

  constructor(private  router:Router,
              public authService:AuthenticationService){}


  ngOnInit(): void {
  }
  onLogin() {
    this.router.navigateByUrl('/login');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
