import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {

  num1:number=0;
  num2:number=0;
  sum:number=0;

  Sum() {
    this.sum=this.num1+this.num2;

  }
  Sub() {
    this.sum=this.num1-this.num2;
  }
  mul() {
    this.sum=this.num1*this.num2;
  }
  div() {
    this.sum=this.num1/this.num2;
  }

}
