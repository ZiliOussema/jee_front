import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacien } from './pharmacien';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {

  private apiServerUrl = environment.serverurl+"Pharmaciens";  
  constructor(private http: HttpClient) { }

  

  public getAllPharmaciens () : Observable<Pharmacien[]> 
  {
   return this.http.get<Pharmacien[]> (this.apiServerUrl+"/GetAllPharmaciens"); 
  }
   
  public addPharmacien (pharmacien :Pharmacien ) : Observable<Pharmacien> 
  {
   return this.http.post<Pharmacien> (this.apiServerUrl+"/SavePharmacien",pharmacien ); 
  }

  public deletePharmacien (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeletePharmacien/"+id); 
  }

  public updatePharmacien (pharmacien :Pharmacien ) : Observable<Pharmacien> 
  {
   return this.http.put<Pharmacien> (this.apiServerUrl+"/UpdatePharmacien",pharmacien ); 
  }
  public getallPharmacien () : Observable<Pharmacien[]> 
  {
   return this.http.get<Pharmacien[]> (this.apiServerUrl+"/GetAllPharmaciens"); 
  }

}
