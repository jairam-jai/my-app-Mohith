import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    name: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]),
    class:new FormControl(),
    fathername:new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    mobile:new FormControl('',[Validators.required, Validators.min(1000000000),Validators.max(99999999999)]),
    address: new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl('',[Validators.required, Validators.maxLength(6)])
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
      percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(6)])
    }))
  }

  deletemark(i:any) {
    this.marksArray.removeAt(i)
  }

  submit() {
    console.log(this.usertaskform.value);
  }
}
