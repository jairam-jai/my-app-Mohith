import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num:number=0;
  b:number=0;

area() {
  this.b=this.num*this.num*3.14;

}
peri() {
  this.b=this.num*2*3.14;
}
}
