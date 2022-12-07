import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacien as pharmacien } from './pharmacien';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {
  private apiServerUrl = environment.serverurl+"Pharmaciens";  
  constructor(private http: HttpClient) { }

  

  public getAllPharmaciens () : Observable<pharmacien[]> 
  {
   return this.http.get<pharmacien[]> (this.apiServerUrl+"/GetAllPharmaciens"); 
  }
   
  public addPharmacien (pharmacien : pharmacien) : Observable<pharmacien> 
  {
   return this.http.post<pharmacien> (this.apiServerUrl+"/SavePharmacien", pharmacien); 
  }

  public deletePharmacien (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeletePharmacien/"+id); 
  }

  public updatePharmacien (pharmacien : pharmacien) : Observable<pharmacien> 
  {
   return this.http.put<pharmacien> (this.apiServerUrl+"/UpdatePharmacien", pharmacien); 
  }

}
