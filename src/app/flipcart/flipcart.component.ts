import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
  flipcart:any=[];
    constructor(private _flicartservice:FlipcartService) {
      _flicartservice.getflipcart().subscribe((data:any)=>{
        console.log(data);
        this.flipcart=data;
        console.log(this.flipcart);
      },(err:any)=>{
        alert("Internal Server Error!")
      })
    }

}
