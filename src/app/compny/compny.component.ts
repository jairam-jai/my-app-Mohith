import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-compny',
  templateUrl: './compny.component.html',
  styleUrls: ['./compny.component.css']
})
export class CompnyComponent {
company:any=[];
  constructor(private _compnayservice:CompanyService) {
   this.relode();
  }
id:any='';
  relode() {
    this._compnayservice.getcompany().subscribe((data)=>{
      console.log(data);
      this.company=data;
    })

  }
  delete(id:number) {
if(confirm("Are you sure delete..")==true) {
  this._compnayservice.delete(id).subscribe((data)=>{
    this.relode();
      console.log(data);
    alert('successfully Deleted...')
  },(err:any)=>{
    alert('internal Server Error..')
  })
} else{
    alert('You have cancelled delete');

}
  }
column:any='';
order:any='';
sorting(){
  this._compnayservice.sortingcompnay(this.column,this.order).subscribe((data)=>{
    console.log(data);
    this.company=data;
  },(err:any)=>{
      alert("Internal Server Error!")
    })

}
compnayKey:any='';
searchcompany() {
  this._compnayservice.filtercompany(this.compnayKey).subscribe((data)=>{
    console.log(data);
    this.company=data;
    
  })
}
lemit:any='';
page:any='';
pagenaction() {
this._compnayservice.pagenactioncompany(this.lemit,this.page).subscribe((data)=>{
  console.log(data);
  this.company=data;
},(err:any)=>{
  alert('Internal Server Error..')
})
}


}
