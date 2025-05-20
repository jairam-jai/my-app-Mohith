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
  this.relode();
}
  relode(){
 this._accounts.getacount().subscribe((data:any)=>{
    // console.log(data);
    this.account=data;
    console.log(this.account);
  })

}

acountkey:any='';
acountsearch() {
  this._accounts.searchacount(this.acountkey).subscribe((data:any)=>{
    console.log(data);
    this.account=data;
  },(err:any)=>{
    alert("Internal Server Error");

  })

}
column:any='';
order:any='';
acountsort() {
  this._accounts.acountsort(this.column,this.order).subscribe((data:any)=>{
    console.log(data);
    this.account=data;
  })
}

limit:any='';
page:any='';

acountpage() {
  this._accounts.pagenaactionacount(this.limit,this.page).subscribe((data:any)=>{
    console.log(data);
    this.account=data
  },(err:any)=>{
    alert('Internal Server Error!');
  })
}

deleteacount(id:number) {
  if(confirm("Are you sure for Delete!")==true) {
    this._accounts.deleteacount(id).subscribe((data:any)=>{
      console.log(data);
      alert('you are acount is deleted..')
      this.relode();
    },(err:any)=>{
      alert("Internal Server  Error!..")
    })
  }


}


}
