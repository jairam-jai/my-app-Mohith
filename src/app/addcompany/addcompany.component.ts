import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent {
constructor(private _companyService:CompanyService,private _routerlink:Router){
  this.companyform.get('workMode')?.valueChanges.subscribe((data)=>{
    if(data=='workfromoffice'){
      this.companyform.addControl('trvelfee', new FormControl);
    }else {
this.companyform.addControl('wifebill',new FormControl)
    }
  })

}

public companyform:FormGroup = new FormGroup({
  name:new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  gender:new FormControl(),
  company:new FormControl(),
  role:new FormControl(),
  package:new FormControl(),
  type:new FormControl(),
  workMode:new FormControl(),
  address:new FormGroup({
    addressLine:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  hikes:new FormArray([])

})

get hikesArray() {
return this.companyform.get('hikes') as FormArray
}


addhikes() {
  this.hikesArray.push(new FormGroup({
    year:new FormControl(),
    percentage:new FormControl()

  }))

  
}

deletehick(i:any) {
  this.hikesArray.removeAt(i)
}
  submitcompany()  {
    this._companyService.createcompanydata(this.companyform.value).subscribe((data)=>{
      console.log(data);
      alert("Vehicle Created Sussessfully😀");
      this._routerlink.navigateByUrl('/dashbord/compny');
      
    },(err:any)=>{
      alert('Internal Sserver Error');
    })
  }

  
}
