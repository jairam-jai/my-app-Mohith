import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagetaskService {

  constructor(private _httpclint:HttpClient) { }

  getimages():Observable<any> {
  return  this._httpclint.get("https://picsum.photos/v2/list?page=1&limit=100");
  }

}
