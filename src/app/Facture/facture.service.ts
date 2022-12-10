import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facture } from './facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiServerUrl = environment.serverurl+"Facture";
  constructor(private http: HttpClient) { }

  public getallFacture () : Observable<Facture[]> 
  {
   return this.http.get<Facture[]> (this.apiServerUrl+"/GetAllFactures"); 
  }
   
  public addFacture (facture: Facture) : Observable<Facture> 
  {
   return this.http.post<Facture> (this.apiServerUrl+"/SaveFacture", facture); 
  }

  public deleteFacture (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteFacture/"+id); 
  }
}
