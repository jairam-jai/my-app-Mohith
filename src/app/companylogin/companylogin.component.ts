import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CanActivateFn, Router } from '@angular/router';
import { CompanyloginService } from '../companylogin.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent {
  constructor(private _companyservice:CompanyloginService,private _router:Router) {}

  public companylogin:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),

  })
  enter() {
    console.log('Form value:', this.companylogin.value);
   this._companyservice.logincompany(this.companylogin.value).subscribe((data:any)=>{
      this.companylogin=data
      this._router.navigateByUrl('/dashbord/compny');
      sessionStorage.setItem('tokenbr',data.token)
    },(err:any)=>{
        console.error('Login failed:', err);
      alert('Internal Server Error!');
    })


  }
}
