import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()a:any='';
  @Output() bevent :EventEmitter<any>= new EventEmitter();


  send() {
    this.bevent.emit('Hello ram');
  }

@Input() role:string='';

@Output() nameevent:EventEmitter<string>=new EventEmitter();

name:string='';

submit() {
  this.nameevent.emit(this.name)
  // alert(this.name)
}          


}
