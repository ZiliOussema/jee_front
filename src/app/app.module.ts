import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';
import { FormsModule } from '@angular/forms';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ProduitComponentComponent } from './Produit/produit-component/produit-component.component';
import { CommandeComponentComponent } from './Commande/commande-component/commande-component.component';
import { FactureComponentComponent } from './Facture/facture-component/facture-component.component';
import { PharmacienComponentComponent } from './pharmacien/pharmacien-component/pharmacien-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
@NgModule({
  
  declarations: [
    AppComponent,
    CategorieComponentComponent,
    LaboratoireComponentComponent,
    FournisseurComponentComponent,
    NavbarComponent,
    SignupComponent,
    ProduitComponentComponent,
    CommandeComponentComponent,
    FactureComponentComponent,
    PharmacienComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
