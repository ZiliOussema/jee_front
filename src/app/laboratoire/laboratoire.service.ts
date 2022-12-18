import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboratoire } from './laboratoire';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  private apiServerUrl = "http://localhost:8081/"+"Laboratoires";
  constructor(private http: HttpClient) { }

  public getallLaboratoire () : Observable<Laboratoire[]> 
  {
   return this.http.get<Laboratoire[]> (this.apiServerUrl+"/GetAllLaboratoires"); 
  }
   
  public addLaboratoire (categorie : Laboratoire) : Observable<Laboratoire> 
  {
   return this.http.post<Laboratoire> (this.apiServerUrl+"/SaveLaboratoire", categorie); 
  }

  public deleteLaboratoire (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteLaboratoire/"+id); 
  }

  public updateLaboratoire (categorie : Laboratoire) : Observable<Laboratoire> 
  {
   return this.http.put<Laboratoire> (this.apiServerUrl+"/UpdateLaboratoire", categorie); 
  }
}

