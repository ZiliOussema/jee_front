import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {
  public fournisseurs : Fournisseur[] | undefined ; 
  public deletedFournisseur: Fournisseur =new Fournisseur()  ; 
  public editFournisseur: Fournisseur =new Fournisseur()  ; 
  public  telephoneErrorMessage :  string="" ;  
  public test : boolean | undefined ; 
  constructor (private fournisseurService: FournisseurService) {
   }
   ngOnInit(): void {
      this.getFournisseur() ;  
      if(localStorage.getItem("CurrentUser")==="admin")
      {
        this.test =true; 
      }
      else this.test= false;
   }

  public getFournisseur() : void
  {
    this.fournisseurService.getallFournisseur().subscribe((response: Fournisseur[]) => {
      this.fournisseurs = response;
      this.fournisseurs.sort((a, b) => {  
        return a.id_fournisseur >= b.id_fournisseur
          ? 1
          : -1
      })
      }
    );      
  }
   public  onOpenModalfour  (fournisseur: Fournisseur |null , mode :  string):  void {
    const container  =  document.getElementById("main-containerfour") ; 
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
    button.setAttribute('data-target', '#addModalfour');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editModalfour');
      this.editFournisseur =fournisseur!  ; 
      }

      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteModalfour');
        this.deletedFournisseur = fournisseur!;  
        }

      container?.appendChild(button) ; 
      button.click() ;  
    }

    public onAddFournisseur (addFormfour : NgForm ): void {
      document.getElementById('btn_annuler_add_four')?.click() ; 
      this.fournisseurService.addFournisseur(addFormfour.value).subscribe(
        (response : Fournisseur )=> {
          console.log(response) ; 
          this.getFournisseur() ; 
          addFormfour.reset(); 
                 } 
      )
    }
    public onEditFournisseur (fournisseur : Fournisseur): void {
      document.getElementById('btn_annuler_edit_four')?.click() ; 
      this.fournisseurService.updateFournisseur(fournisseur).subscribe(
        (response: Fournisseur) => {
        console.log(response);
        this.getFournisseur ();
        }
        );
    }

    public onDeleteFournisseur (fournisseur_id: number): void {
      document.getElementById('btn_annuler_delete_four')?.click() ; 
      this.fournisseurService.deleteFournisseur(fournisseur_id).subscribe(
      (response:void) => {
      console.log(response);
      this.getFournisseur ();
      }
      );
    }


 
    

}
