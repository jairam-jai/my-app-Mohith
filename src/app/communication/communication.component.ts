import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
nameshow:string='';
  show(data:string) {
this.nameshow=data
  }
}
