import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
declare function  mobileMenu() :  any  ; 
@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(private  router : Router) { }

  ngOnInit(): void {
    mobileMenu() ; 
  }
  deconnecter () : void{
    this.router.navigate(["/login"]) ;}
  }

