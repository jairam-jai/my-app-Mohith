import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsapiService {

  constructor(private _httpclint:HttpClient) { }

  getacount():Observable<any> {
  return  this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }

  searchacount(term:any):Observable<any> {
    return  this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter'+term)


  }
}
