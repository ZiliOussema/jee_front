import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthentificationGuard } from './authentification.guard';
import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { CommandeComponentComponent } from './Commande/commande-component/commande-component.component';
import { FactureComponentComponent } from './Facture/facture-component/facture-component.component';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { HomeComponent } from './home/home/home.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { PharmacienComponentComponent } from './pharmacien/pharmacien-component/pharmacien-component.component';
import { ProduitComponentComponent } from './Produit/produit-component/produit-component.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {component :CategorieComponentComponent, path:'categorie', canActivate:[AuthentificationGuard]}, 
  {component :LaboratoireComponentComponent, path:'laboratoire',canActivate:[AuthentificationGuard] }, 
  {component :FournisseurComponentComponent, path:'fournisseur',canActivate:[AuthentificationGuard] },  
  {component :CategorieComponentComponent, path:'categorie',canActivate:[AuthentificationGuard] },  
  {component :CommandeComponentComponent, path:'commande',canActivate:[AuthentificationGuard] },  
  {component :FactureComponentComponent, path:'facture',canActivate:[AuthentificationGuard] }, 
  {component :ProduitComponentComponent, path:'produit',canActivate:[AuthentificationGuard] }, 
  {component :LoginComponentComponent, path:'login' }, 
  {component :SignupComponent, path:'signup' }, 
  {component :HomeComponent, path:'home' }, 
  {component :AdminComponent, path:'Admin',canActivate:[AuthentificationGuard]  },
  {component :UserComponent, path:'User',canActivate:[AuthentificationGuard]  },
  {component :PharmacienComponentComponent, path:'pharmacien' ,canActivate:[AuthentificationGuard]}, 


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
