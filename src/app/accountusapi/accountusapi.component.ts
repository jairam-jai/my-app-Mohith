import { Component } from '@angular/core';
import { AccountsapiService } from '../accountsapi.service';

@Component({
  selector: 'app-accountusapi',
  templateUrl: './accountusapi.component.html',
  styleUrls: ['./accountusapi.component.css']
})
export class AccountusapiComponent {
account:any=[];
constructor(private _accounts:AccountsapiService) {
  _accounts.getacount().subscribe((data:any)=>{
    // console.log(data);
    this.account=data;
    console.log(this.account);
  })

}

acountkey:any='';
acountsearch() {
  this._accounts.searchacount(this.acountkey).subscribe((data:any)=>{
    console.log(data);
    this.acountkey=data
  },(err:any)=>{
    alert("Internal Server Error");

  })

}

}
