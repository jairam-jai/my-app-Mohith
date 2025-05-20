import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCartService } from '../student-cart.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  id:any='';
  card:any={};
  constructor(private _acativatedrouter:ActivatedRoute, private _studentService:StudentCartService){
    _acativatedrouter.params.subscribe((data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);
    })

    _studentService.getcard(this.id).subscribe((data:any)=>{
      console.log(data);
      this.card=data;
    })

  }

}
