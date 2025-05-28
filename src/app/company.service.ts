import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _httpclint:HttpClient) { }
  getcompany():Observable<any> {
   return this._httpclint.get('https://6572df5d192318b7db412dfe.mockapi.io/employees');
  }
  // view methad
  getemploye(id:any):Observable<any>{
       return this._httpclint.get('https://6572df5d192318b7db412dfe.mockapi.io/employees/'+id);

  }
  delete(id:number):Observable<any> {
   return this._httpclint.delete('https://6572df5d192318b7db412dfe.mockapi.io/employees/'+id)
  }

  sortingcompnay(column:any,order:any):Observable<any> {
   return this._httpclint.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy='+column+'&order='+order)
  }

  filtercompany(term:any):Observable<any> {
   return this._httpclint.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?filter='+term)
  }

  pagenactioncompany(lemit:any,page:any):Observable<any> {
   return this._httpclint.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?limit='+lemit+'&page='+page);
  }
  createcompanydata(data:any):Observable<any> {
   return this._httpclint.post('https://6572df5d192318b7db412dfe.mockapi.io/employees',data)
  }

 
}
