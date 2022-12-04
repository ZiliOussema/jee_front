import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pharmacien } from './pharmacien';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {
  private apiServerUrl ='http://127.0.0.1:8081/' ;  
  constructor (private http: HttpClient) { }

}
