import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
store(value:any) {
alert(value);
}

rating:any='';
ratingshow(data:any) {
this.rating=data
}
}
