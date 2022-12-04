import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';
import { CategorieService } from './categorie/categorie.service';
import { FormsModule } from '@angular/forms';
import { LaboratoireService } from './laboratoire/laboratoire.service';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FournisseurService } from './fournisseur/fournisseur.service';
@NgModule({
  declarations: [
    AppComponent,
    CategorieComponentComponent,
    LaboratoireComponentComponent,
    FournisseurComponentComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [CategorieService,LaboratoireService,FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
