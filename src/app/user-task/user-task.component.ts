import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent {

  constructor() {
    this.usertaskform.get('type')?.valueChanges.subscribe((data:any)=>{
      if(data=='dayschoolor') {
        this.usertaskform.addControl('busfee',new FormControl);
        this.usertaskform.removeControl('hostelfee')
      } else {
        this.usertaskform.addControl('hostelfee',new FormControl);
        this.usertaskform.removeControl('busfee');
      }
    })
  }


  public usertaskform:FormGroup = new FormGroup({
    name: new FormControl(),
    class:new FormControl(),
    fathername:new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    }),
    type:new FormControl(),
    marks:new FormArray([])
  })

  get marksArray() {
   return this.usertaskform.get('marks') as FormArray
  }

  addmarks() {
    this.marksArray.push(new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl()
    }))
  }

  deletemark(i:any) {
    this.marksArray.removeAt(i)
  }

  submit() {
    console.log(this.usertaskform.value);
  }
}
