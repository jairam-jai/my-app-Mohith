import { Component } from '@angular/core';
import { ImagetaskService } from '../imagetask.service';

@Component({
  selector: 'app-imagetask',
  templateUrl: './imagetask.component.html',
  styleUrls: ['./imagetask.component.css']
})
export class ImagetaskComponent {
imagetask:any=[
  ];
  constructor(private _imageservice:ImagetaskService) {
    _imageservice.getimages().subscribe((data:any)=> {
      console.log(data);
      this.imagetask=data
      console.log(this.imagetask);
    }, (err:any)=> {
      alert("internal Server Error!")
    })
  }

}
