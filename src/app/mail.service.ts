import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpclint:HttpClient) { }
  getmail():Observable<any> {
    return this._httpclint.get("https://jsonplaceholder.typicode.com/todos")
  }
}
