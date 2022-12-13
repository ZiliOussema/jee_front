import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pharmacien } from 'src/app/pharmacien/pharmacien';
import { PharmacienService } from 'src/app/pharmacien/pharmacien.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
 
 private pharmacien : Pharmacien | undefined; 
 public  role : string |undefined; 
  
  constructor (private pharmacienService : PharmacienService , private router : Router) {
  }
  ngOnInit(): void {
  //show() ; 
  }
  public  authentification () : void
  {   const password = document.getElementById('password') as HTMLInputElement | null;
   const username = document.getElementById('username') as HTMLInputElement | null;

    this.pharmacienService.authentification(password!?.value , username!?.value).subscribe((response: Pharmacien) => {
       this.pharmacien = response;
       localStorage.setItem("CurrentUser" , JSON.stringify(this.pharmacien)); 
      
       if(response != null) 
       {alert("Bienvenue "+this.pharmacien.nom_phar); 
       if(this.pharmacien.admin)
       { this.router.navigate(["/Admin"]) ; 
       }
       else this.router.navigate(["/User"]) ;
        }
       else {alert("verifier vos champs" ) ;
       this.router.navigate(["/login"]) ;
      }
    }

    ); 
}

}