import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
constructor(private _router:Router) {}

  logout() {

    if(confirm("Are you sure to logout")==true){
      sessionStorage.removeItem('token');
          this._router.navigateByUrl('/login')
    }else {
      alert('Cancelled Logout');
    }

  }
}
