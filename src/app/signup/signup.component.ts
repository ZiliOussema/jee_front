import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pharmacien } from '../pharmacien/pharmacien';
import { PharmacienService } from '../pharmacien/pharmacien.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor (private pharmacienService : PharmacienService , private router : Router) {
   }
   ngOnInit(): void {
   //show() ; 
   }
 
  
    public onAddPharmacien (addFormfour : NgForm ): void {
      this.pharmacienService.addPharmacien(addFormfour.value).subscribe(
        (response : Pharmacien )=> {
          console.log(response) ;
          if(response != null) 
          {alert("Compte Crée avec succès!"); 
          this.router.navigate(["/login"]) ; 
           }
          else {alert("verifier vos champs" ) ;
          this.router.navigate(["/signup"]) ; 
        }
                 } 
      )
    }
    public onEditPharmacien (pharmacien : Pharmacien): void {
      this.pharmacienService.updatePharmacien(pharmacien).subscribe(
        (response: Pharmacien) => {
        console.log(response);
        }
        );
    }
}
