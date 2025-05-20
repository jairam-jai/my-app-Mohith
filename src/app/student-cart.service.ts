import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCartService {

  constructor(private _httpclint:HttpClient) { }

  getcart():Observable<any> {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')
  }

  
  getcard(id:any):Observable<any> {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }

  filtercart(filterdata:any):Observable<any> {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+filterdata)
  }

  sort(column:any,order:any):Observable<any> {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+'&order='+order)

  }

  pagenactioncard(limit:any,page:any):Observable<any>  {
   return this._httpclint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page);
  }



  deletecard(id:number):Observable<any> {
  return  this._httpclint.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)

  }

  addstudent(data:any):Observable<any> {
   return this._httpclint.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data)
  }
   updatestudent(id:any, data:any):Observable<any> {
   return this._httpclint.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data)
  }
}
