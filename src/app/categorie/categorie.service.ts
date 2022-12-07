import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiServerUrl = environment.serverurl+"Categories";  
  constructor(private http: HttpClient) { }

  public getallCategorie () : Observable<Categorie[]> 
  {
   return this.http.get<Categorie[]> (this.apiServerUrl+"/GetAllCategories"); 
  }
   
  public addCategorie (categorie : Categorie) : Observable<Categorie> 
  {
   return this.http.post<Categorie> (this.apiServerUrl+"/SaveCategorie", categorie); 
  }

  public deleteCategorie (id :  number) : Observable<void> 
  {
   return this.http.delete<void>  (this.apiServerUrl+"/DeleteCategorie/"+id); 
  }

  public updateCategorie (categorie : Categorie) : Observable<Categorie> 
  {
   return this.http.put<Categorie> (this.apiServerUrl+"/UpdateCategorie", categorie); 
  }
}
