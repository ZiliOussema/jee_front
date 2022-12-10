import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fournisseur } from 'src/app/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/fournisseur/fournisseur.service';
import { Produit } from 'src/app/Produit/produit';
import { ProduitService } from 'src/app/Produit/produit.service';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commande-component',
  templateUrl: './commande-component.component.html',
  styleUrls: ['./commande-component.component.css']
})
export class CommandeComponentComponent implements OnInit { 
    public fournisseurs : Fournisseur[] | undefined ; 
    public produits : Produit[] | undefined ; 
    public commandes : Commande[] | undefined ; 
    public deletedCommande: Commande =new Commande()  ; 
    public editCommande: Commande =new Commande()  ; 
  
    constructor (private fournisseurService : FournisseurService , private commandeService :CommandeService ,  private produitService :ProduitService ) {
     }
     ngOnInit(): void {
        this.getCommande() ; 
      
     }  
  
    public getCommande() : void
    { this.fournisseurService.getallFournisseur().subscribe((response: Fournisseur[]) => {
          this.fournisseurs = response;}); 
      this.produitService.getallProduit().subscribe((response: Produit[]) => {
        this.produits = response;}) ; 
        this.commandeService.getallCommande().subscribe((response: Commande[]) => {
          this.commandes = response;  
        this.commandes.sort((a, b) => {  
          return a.id>= b.id
            ? 1
            : -1
        })
        }
      ); 
  
    }
  
  
     public  onOpenModal  (commande: Commande |null , mode :  string):  void {
      const container  =  document.getElementById("main-container") ; 
       const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
      button.setAttribute('data-target', '#addModalcmd');
      }
      
  
        if (mode === 'delete') {
          button.setAttribute('data-target', '#deleteModalcmd');
          this.deletedCommande = commande!;  
          }
  
        container?.appendChild(button) ; 
        button.click() ;  
      }
  
      public onAddCommande (addFormcmd : NgForm ): void {
        document.getElementById('btn_annuler_add_cmd')?.click() ; 
        this.commandeService.addCommande(addFormcmd.value).subscribe(
          (response : Commande )=> {
            console.log(response) ; 
            this.getCommande() ; 
            addFormcmd.reset(); 
                   } 
        )
      }
     
  
      public onDeleteCommande (commande_id: number): void {
        document.getElementById('btn_annuler_delete_cmd')?.click() ; 
        this.commandeService.deleteCommande(commande_id).subscribe(
        (response:void) => {
        console.log(response);
        this.getCommande ();
       
        }
        );
      }
  }

