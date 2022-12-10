import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiServerUrl = environment.serverurl+"Produits";
  constructor(private http: HttpClient) { }

  public getallProduit () : Observable<Produit[]> 
  {
   return this.http.get<Produit[]> (this.apiServerUrl+"/GetAllProduits"); 
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

