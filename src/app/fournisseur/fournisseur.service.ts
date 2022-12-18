import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fournisseur } from './fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiServerUrl = "http://localhost:8081/"+"Fournisseur";  
  constructor(private http: HttpClient) { }

  public getallFournisseur () : Observable<Fournisseur[]> 
  {
   return this.http.get<Fournisseur[]> (this.apiServerUrl+"/GetAllFournisseurs"); 
  }
   
  public addFournisseur (fournisseur : Fournisseur) : Observable<Fournisseur> 
  {
   return this.http.post<Fournisseur> (this.apiServerUrl+"/SaveFournisseur", fournisseur); 
  }

  public deleteFournisseur (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteFournisseur/"+id); 
  }

  public updateFournisseur (fournisseur : Fournisseur) : Observable<Fournisseur> 
  {
   return this.http.put<Fournisseur> (this.apiServerUrl+"/UpdateFournisseur", fournisseur); 
  }
}
