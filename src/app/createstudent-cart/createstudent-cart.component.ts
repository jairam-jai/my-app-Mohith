import { Component } from '@angular/core';
import { StudentCartService } from '../student-cart.service';

@Component({
  selector: 'app-createstudent-cart',
  templateUrl: './createstudent-cart.component.html',
  styleUrls: ['./createstudent-cart.component.css']
})


export class CreatestudentCartComponent {

  cartstudent:any='';
  constructor(private _studentcart:StudentCartService){
    this.relode()
  }
 relode() {  
  this._studentcart.getcart().subscribe((data:any)=>{
      console.log(data);
      this.cartstudent=data
    },(err:any)=> {
      alert("Internal Server Error!")
    })
  }
keycart:any='';
cartsearch() {
  this._studentcart.filtercart(this.keycart).subscribe((data:any)=> {
console.log(data);
this.cartstudent=data
  },(err:any)=>{
    alert("internal Server Error!")
    this.relode();
  })
}
column:any='';
order:any='';
cartsort() {
  // console.log(this.column,this.order);
  this._studentcart.sort(this.column,this.order).subscribe((data:any)=>{
    console.log(data);
    this.cartstudent=data;
 },(err:any)=>{
   alert("Internal Server Error!");
 })

}

limit:any='';
page:any='';
pagecard() {
  console.log(this.limit,this.page);
  this._studentcart.pagenactioncard(this.limit,this.page).subscribe((data:any)=>{
    console.log(data);
    this.cartstudent=data
  },(err:any)=>{
    alert("Internal Server Error!");
  })

}

deletecard(id:number) {
  if(confirm("Are you  sure to Delete")==true){
this._studentcart.deletecard(id).subscribe((data:any)=>{
  alert("Record delete Successfully")
  this.relode();
  
})
  } else{
    alert('You Have cancelled delete')
  }
}

}
