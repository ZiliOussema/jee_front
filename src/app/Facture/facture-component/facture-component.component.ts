import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fournisseur } from 'src/app/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/fournisseur/fournisseur.service';
import { Produit } from 'src/app/Produit/produit';
import { ProduitService } from 'src/app/Produit/produit.service';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-facture-component',
  templateUrl: './facture-component.component.html',
  styleUrls: ['./facture-component.component.css']
})
export class FactureComponentComponent implements OnInit {
  public fournisseurs : Fournisseur[] | undefined ; 
  public  factures: Facture[] | undefined ; 
  public produits : Produit[] | undefined ; 
  public deletedFacture: Facture =new Facture()  ; 
  constructor (private fournisseurService : FournisseurService ,private produitService :ProduitService ,  private factureService : FactureService ,) {
  }
  ngOnInit(): void {
     this.getFacture() ; 
   
  }  

 public getFacture() : void
 { this.fournisseurService.getallFournisseur().subscribe((response1: Fournisseur[]) => {
       this.fournisseurs = response1;}); 
       this.produitService.getallProduit().subscribe((response: Produit[]) => {
        this.produits = response;}); 
   
     this.factureService.getallFacture().subscribe((response: Facture[]) => {
       this.factures = response;  
     this.factures.sort((a, b) => {  
       return a.id>= b.id
         ? 1
         : -1
     })
     }
   ); 

 }


  public  onOpenModal  (facture: Facture |null , mode :  string):  void {
   const container  =  document.getElementById("main-container") ; 
    const button = document.createElement('button');
   button.type = 'button';
   button.style.display = 'none';
   button.setAttribute('data-toggle', 'modal');
   if (mode === 'add') {
   button.setAttribute('data-target', '#addModalfact');
   }
   
     if (mode === 'delete') {
       button.setAttribute('data-target', '#deleteModalfact');
       this.deletedFacture = facture!;  
       }

     container?.appendChild(button) ; 
     button.click() ;  
   }

   public onAddFacture (addFormfact : NgForm ): void {
     document.getElementById('btn_annuler_add_fact')?.click() ; 
     this.factureService.addFacture(addFormfact.value).subscribe(
       (response : Facture )=> {
         console.log(response) ; 
         this.getFacture() ; 
         addFormfact.reset(); 
                } 
     )
   }
  

   public onDeleteFacture (facture_id: number): void {
     document.getElementById('btn_annuler_delete_fact')?.click() ; 
     this.factureService.deleteFacture(facture_id).subscribe(
     (response:void) => {
     console.log(response);
     this.getFacture ();
    
     }
     );
   }
}
