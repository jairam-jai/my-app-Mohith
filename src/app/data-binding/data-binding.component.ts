import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  greet() {
    alert("Hii Hello greet how are you")
  }
  state() {
    alert("hello hi ")
  }
  enter() {
    alert('Typing........')
  }

  massage:string="Jai is a good boy!";
  isdisebule:boolean=false;
  name:string="Jai Hunuman";
  isdisebuleone:boolean=true
  number:number=8688200742;

  mobil:string='+91'
  submit() {
    alert(this.mobil);
  }



  num1:number=0;
  num2:number=0;
  sum:number=0;

  calculate() {
    this.sum=this.num1+this.num2;
  }
}
