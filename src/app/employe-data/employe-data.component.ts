import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-data',
  templateUrl: './employe-data.component.html',
  styleUrls: ['./employe-data.component.css']
})
export class EmployeDataComponent {
  employees:any = [
    {name:'pen',price:35,rating:3.4,delivery:'false'},
    {name:'phone',price:10000,rating:2,delivery:'true'},
    {name:'shirt',price:300,rating:5,delivery:'true'},
    {name:'cap',price:200,rating:4.4,delivery:'false'},
    {name:'mobile case',price:300,rating:3.3,delivery:'true'},
    {name:'remote',price:400,rating:2.5,delivery:'true'},
    {name:'watch',price:1000,rating:4,delivery:'false'},
    {name:'TV',price:20000,rating:5,delivery:'false'},
    {name:'DVDplayer',price:15000,rating:4.2,delivery:'true'}
  ]

   delete(i:number) {
    alert(i)
    this.employees.splice(i,1);
  }

  Hightolow() {
    this.employees.sort((a:any,b:any)=>b.price-a.price);
  }
  lowtohigh() {
   this.employees.sort((a:any,b:any)=>a.price-b.price);
  }

  ratinglow() {
    this.employees.sort((a:any,b:any)=>a.rating-b.rating);

  }
  ratinghigh() {
    this.employees.sort((a:any,b:any)=>b.rating-a.rating);
  }

// add to cart

  term:any='';
  search() {
this.employees=this.employees.filter((employees:any)=>employees.name.includes(this.term));

  }
  

  totleprice() {
    var totle = this.employees.reduce((acc:any,valu:any)=>acc+valu.price,0)
    alert(totle);
  }

  totlecart() {

    alert(this.employees.length)

  }

  name:string='';
  price:number=0;
  rating:number=0;
  delivery:boolean=false
  message=""
  addtocart() {
    if(this.name===""||this.price==0||this.rating==0)
      this.message="fill alll required";
    else {
      var oneproduct={name:this.name,price:this.price,rating:this.rating,delivery:this.delivery}
      this.employees.push(oneproduct);
      this.employees;
      this.name=''
      this.price=0;
      this.rating=0;
    }
  } 
product:any=0;
  freedelivery() {
  }
  adddiscount() {
    this.employees.map((employe:any)=>{
      employe.price=employe.price/2;
      return employe
    })
  }
  deliverycharg() {
    this.employees.map((employe:any)=> {
      employe.price=employe.price+30
    })
  }
 
}

  

