import { Component } from '@angular/core';
import { StudentCartService } from '../student-cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {


  constructor(private _studentcard:StudentCartService,private _routerlink:Router) {}

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
