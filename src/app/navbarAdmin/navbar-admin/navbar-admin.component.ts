import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 declare function  mobileMenu() :  any  ; 
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    mobileMenu() ; 
  }
  deconnecter () : void{
    this.router.navigate(["/login"]) ;}
  }

