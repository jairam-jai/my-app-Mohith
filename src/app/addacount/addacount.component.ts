import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsapiService } from '../accountsapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addacount',
  templateUrl: './addacount.component.html',
  styleUrls: ['./addacount.component.css']
})
export class AddacountComponent {

  constructor(private _acountadd: AccountsapiService, private _addrouter:Router){}

  public acountform:FormGroup = new FormGroup({
   account_name:new FormControl(),
   account_number:new FormControl(),
   available_balance:new FormControl(),
   city:new FormControl(),
   ifsc_code:new FormControl(),
   profie_picture:new FormControl()


  })
  submit() {
this._acountadd.creageacount(this.acountform.value).subscribe((data:any)=>{
  console.log(data);
  alert("You are Acount Is Added")
  this._addrouter.navigateByUrl('/dashbord/accountsusapi');

},(err:any)=>{
  alert("Internal Server Error!")
})
  }

}
