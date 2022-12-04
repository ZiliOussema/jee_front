import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';

const routes: Routes = [
  {component :CategorieComponentComponent, path:'categorie' }, 
  {component :LaboratoireComponentComponent, path:'laboratoire' }, 
  {component :FournisseurComponentComponent, path:'fournisseur' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
