import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'src/app/categorie/categorie';
import { CategorieService } from 'src/app/categorie/categorie.service';
import { Fournisseur } from 'src/app/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/fournisseur/fournisseur.service';
import { Laboratoire } from 'src/app/laboratoire/laboratoire';
import { LaboratoireService } from 'src/app/laboratoire/laboratoire.service';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-component',
  templateUrl: './produit-component.component.html',
  styleUrls: ['./produit-component.component.css']
})
export class ProduitComponentComponent implements OnInit {

  public fournisseurs : Fournisseur[] | undefined ; 
  public produits : Produit[] | undefined ; 
  public categories : Categorie[] | undefined ; 
  public laboratoires : Laboratoire[] | undefined ; 
  public deletedProduit: Produit =new Produit()  ; 
  public editProduit: Produit =new Produit()  ; 

  constructor (private fournisseurService : FournisseurService , private produitService: ProduitService,private categorieService: CategorieService,  private laboratoireService: LaboratoireService ) {
   }
   ngOnInit(): void {
      this.getProduit() ; 
    
   }

  public getProduit() : void
  { this.laboratoireService.getallLaboratoire().subscribe((responselab: Laboratoire[]) => {
    this.laboratoires = responselab;})
    this.categorieService.getallCategorie().subscribe((response: Categorie[]) => {
      this.categories = response;}) 
      this.fournisseurService.getallFournisseur().subscribe((response: Fournisseur[]) => {
        this.fournisseurs = response;})
    this.produitService.getallProduit().subscribe((response: Produit[]) => {
      this.produits = response;
      this.produits.sort((a, b) => {  
        return a.id_prd >= b.id_prd
          ? 1
          : -1
      })
      }
    ); 
   
  }


   public  onOpenModal  (produit: Produit |null , mode :  string):  void {
    const container  =  document.getElementById("main-container") ; 
     const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
    button.setAttribute('data-target', '#addModalprd');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editModalprd');
      this.editProduit =produit!  ; 
      }

      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteModalprd');
        this.deletedProduit = produit!;  
        }

      container?.appendChild(button) ; 
      button.click() ;  
    }

    public onAddProduit (addFormlab : NgForm ): void {
      document.getElementById('btn_annuler_add_prd')?.click() ; 
      this.produitService.addProduit(addFormlab.value).subscribe(
        (response : Produit )=> {
          console.log(response) ; 
          this.getProduit() ; 
          addFormlab.reset(); 
                 } 
      )
    }
    public onEditProduit (produit : Produit): void {
      document.getElementById('btn_annuler_edit_prd')?.click() ; 
      this.produitService.updateProduit(produit).subscribe(
        (response: Produit) => {
        console.log(response);
        this.getProduit ();
        }
        );
    }

    public onDeleteProduit (produit_id: number): void {
      document.getElementById('btn_annuler_delete_prd')?.click() ; 
      this.produitService.deleteProduit(produit_id).subscribe(
      (response:void) => {
      console.log(response);
      this.getProduit ();
      }
      );
    }
}















































































