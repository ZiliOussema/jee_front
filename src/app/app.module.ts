import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CategorieComponentComponent } from './categorie/categorie-component/categorie-component.component';
import { LaboratoireComponentComponent } from './laboratoire/laboratoire-component/laboratoire-component.component';
import { FormsModule } from '@angular/forms';
import { FournisseurComponentComponent } from './fournisseur/fournisseur-component/fournisseur-component.component';
import { SignupComponent } from './signup/signup.component';
import { ProduitComponentComponent } from './Produit/produit-component/produit-component.component';
import { CommandeComponentComponent } from './Commande/commande-component/commande-component.component';
import { FactureComponentComponent } from './Facture/facture-component/facture-component.component';
import { PharmacienComponentComponent } from './pharmacien/pharmacien-component/pharmacien-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NavbarAdminComponent } from './navbarAdmin/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './navbarUser/navbar-user/navbar-user.component';
import { UpdateUserComponent } from './updateUser/update-user/update-user.component';
@NgModule({
  
  declarations: [
    AppComponent,
    CategorieComponentComponent,
    LaboratoireComponentComponent,
    FournisseurComponentComponent,
    SignupComponent,
    ProduitComponentComponent,
    CommandeComponentComponent,
    FactureComponentComponent,
    PharmacienComponentComponent,
    LoginComponentComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    UpdateUserComponent,
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
