import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isvisible:Boolean=false;

constructor(private _loginservice:LoginService,private _router:Router){}

  public loginform:FormGroup = new  FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  login() {
    // console.log(this.loginform);
    this._loginservice.loginpost(this.loginform.value).subscribe((data:any)=>{
      alert(this.loginform=data)
      this.loginform=data
      this._router.navigateByUrl('/dashbord');
      sessionStorage.setItem('tokenbr',data.token)
    },(err:any)=>{
      alert('Internal Server Error!');
    })


  }
  eye(){
    this.isvisible=!(this.isvisible)
  }
}
