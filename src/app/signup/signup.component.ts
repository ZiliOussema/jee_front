import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacien } from '../pharmacien/pharmacien';
import { PharmacienService } from '../pharmacien/pharmacien.service';

declare function show() :  any ;  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor (private pharmacienService : PharmacienService) {
   }
   ngOnInit(): void {
   //show() ; 
   }
 
  
    public onAddPharmacien (addFormfour : NgForm ): void {
      this.pharmacienService.addPharmacien(addFormfour.value).subscribe(
        (response : Pharmacien )=> {
          console.log(response) ; 
          addFormfour.reset(); 
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
