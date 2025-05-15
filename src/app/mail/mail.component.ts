import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
maildata:any=[];
 constructor(private _mailService:MailService) {
_mailService.getmail().subscribe((data:any)=>{
  console.log(data);
  this.maildata=data
  console.log(this.maildata);

}, (err:any)=>{
  alert("Internal Server Error!")
})


 }
  
}
