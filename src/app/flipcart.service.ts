import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipcartService {
  constructor(private _httpclint:HttpClient) {}
     getflipcart():Observable<any> {
      return this._httpclint.get('https://fakestoreapi.com/products')
    }

   }
   
  
  

  

