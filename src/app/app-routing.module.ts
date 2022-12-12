import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { CommandeComponentComponent } from './Commande/commande-component/commande-component.component';
import { FactureComponentComponent } from './Facture/facture-component/facture-component.component';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';
import { ProduitComponentComponent } from './Produit/produit-component/produit-component.component';

const routes: Routes = [
  {component :CategorieComponentComponent, path:'categorie' }, 
  {component :LaboratoireComponentComponent, path:'laboratoire' }, 
  {component :FournisseurComponentComponent, path:'fournisseur' },  
  {component :CategorieComponentComponent, path:'categorie' },  
  {component :CommandeComponentComponent, path:'commande' },  
  {component :FactureComponentComponent, path:'facture' }, 
  {component :ProduitComponentComponent, path:'produit' }, 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
