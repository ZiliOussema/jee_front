import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {


  private apiServerUrl = environment.serverurl+"Commandes_prd";
  constructor(private http: HttpClient) { }

  public getallCommande () : Observable<Commande[]> 
  {
   return this.http.get<Commande[]> (this.apiServerUrl+"/GetAllCommande_prds"); 
  }
   
  public addCommande (commande: Commande) : Observable<Commande> 
  {
   return this.http.post<Commande> (this.apiServerUrl+"/SaveCommande_prd", commande); 
  }

  public deleteCommande (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteCommande_prd/"+id); 
  }


}
