import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent {
  id:any='';
  Company:any={};
  constructor(private _activetrouter:ActivatedRoute,private _companyservic:CompanyService) {
    _activetrouter.params.subscribe(
      (data:any)=>{
      console.log(data.id);
      this.id=data.id

    },(err:any)=>{
      alert("Internal Server Error..")
    })
   _companyservic.getemploye(this.id).subscribe((data)=>{
    this.Company=data
    console.log(this.Company);
   },(err:any)=>{
    alert('Internal Server Error...');
   })

    

  }

}
