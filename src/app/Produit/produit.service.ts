import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiServerUrl = "http://localhost:8081/"+"Produits";
  constructor(private http: HttpClient) { }

  public getallProduit () : Observable<Produit[]> 
  {
   return this.http.get<Produit[]> (this.apiServerUrl+"/GetAllProduits"); 
  }
  public getProduitByCategorie (id :  number) : Observable<Produit[]> 
  {
   return this.http.get<Produit[]> (this.apiServerUrl+"/GetProduitByCategorie/"+id); 
  }
  public getProduitByFournisseur (id :  number) : Observable<Produit[]> 
  {
   return this.http.get<Produit[]> (this.apiServerUrl+"/GetProduitByFournisseur/"+id); 
  }
  public getProduitByLaboratoire (id :  number) : Observable<Produit[]> 
  {
   return this.http.get<Produit[]> (this.apiServerUrl+"/GetProduitByLaboratoire/"+id); 
  }
   
  public addProduit (produit : Produit) : Observable<Produit> 
  {
   return this.http.post<Produit> (this.apiServerUrl+"/SaveProduit", produit); 
  }

  public deleteProduit (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteProduit/"+id); 
  }

  public updateProduit (produit : Produit) : Observable<Produit> 
  {
   return this.http.put<Produit> (this.apiServerUrl+"/UpdateProduit", produit); 
  }
}

