import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpclint:HttpClient) { }
  getvehicles():Observable<any> {
    return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }

    getvehicle(id:any):Observable<any> {
    return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
  }

  flitervehicles(term:any):Observable<any> {
    return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
  }

  sortvehicles(column:any,order:any):Observable<any> {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+'&order='+order)
  }

  pagenactionvehicles(limit:any,page:any):Observable<any>{
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page)

  }

  deleteVechicle(id:number):Observable<any>{
   return this._httpclint.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }


  createvehicle(data:any):Observable<any> {
 return this._httpclint.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data)
  }

  
  updatevehicle( id:any ,data:any):Observable<any> {
 return this._httpclint.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data)
  }
}
