import { Component } from '@angular/core';
import { StudentCartService } from '../student-cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {

id:any='';
  constructor(private _studentcard:StudentCartService,private _routerlink:Router, private _activerouter:ActivatedRoute ) {
_activerouter.params.subscribe((data:any)=>{
  console.log(data.id);
  this.id=data.id;
  if(this.id){
     _studentcard.getcard(data.id).subscribe((data:any)=>{
    console.log(data);
    this.newcard.patchValue(data);

  },(err:any)=>{
    alert("Unable to fetch vehicle data")
  })

  }
 
  
})

  }

  public newcard:FormGroup = new FormGroup ({
    name:new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    email:new FormControl(),
    phone: new FormControl(),
    profile_picture: new FormControl(),
    school_name:new FormControl(),
    school_pin: new FormControl(),
    school_city: new FormControl(),
  })

  addstudent() {

    if(this.id){
      this._studentcard.updatestudent(this.id,this.newcard.value).subscribe((data:any)=>{
        console.log(data);
        alert("Student Cart Update Successfully!😍");
        this._routerlink.navigateByUrl('/dashbord/createstudent-cart');
      },(err:any)=>{
        alert("Unbule to Update😒")
      })

    }else{
      console.log(this.newcard.value);
    this._studentcard.addstudent(this.newcard.value).subscribe((data:any)=>{
      console.log(data);
      alert("Card Add Succissfully");
      this._routerlink.navigateByUrl('/dashbord/createstudent-cart')
    },(err:any)=>{
      alert("Internal Server Error!")
    })
 
      
    }
     }
}
