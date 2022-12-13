import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pharmacien } from 'src/app/pharmacien/pharmacien';
import { PharmacienService } from 'src/app/pharmacien/pharmacien.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public test : boolean | undefined ; 
  public pharmacien : Pharmacien | undefined; 
  public editPharmacien: Pharmacien =new Pharmacien()  ; 
    constructor(private pharmacienService : PharmacienService  , private router :  Router ) { }

  ngOnInit(): void {
    if(localStorage.getItem("CurrentUser")==="admin")
    {
      this.test =true; 
    }
    else this.test= false;  
    this.getPharmacienByUsername();  
  }
  public  getPharmacienByUsername () : void 
  {  let username : string |null = localStorage.getItem("username"); 
    this.pharmacienService.getPharmacienByUsename(username!).subscribe((response: Pharmacien) => {
       this.pharmacien = response;}
    ); 
}
public EditPharmacien (pharmacien : Pharmacien) {

  this.pharmacienService.updatePharmacien(pharmacien).subscribe(
    (response: Pharmacien) => {
    console.log(response);
    alert("Modification avec succée"); 
    this.router.navigate(['/Admin']);  
    }
    );
    
}

}
