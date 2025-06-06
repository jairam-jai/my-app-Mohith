import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { mail } from '../customsvalidators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  //dynamic forms
  showdata:boolean=false;
  constructor(){
    this.userform.get('type')?.valueChanges.subscribe((data:any)=>{
      if(data=='daySchool'){
        this.userform.addControl('busfee',new FormControl);
        this.userform.removeControl('hostelfee');

      } else{
        this.userform.addControl('hostelfee',new FormControl);
        this.userform.removeControl('busfee');
      }
    })
  }

  public userform:FormGroup = new FormGroup({
    name:new  FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    mobile:new  FormControl('',[Validators.required,Validators.minLength(0),Validators.maxLength(10)]),
    email:new  FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(20),mail]),
    password:new  FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pincode: new FormControl()
    }),
    type:new FormControl(),
    cards:new FormArray([])
  })
  get CardsFormsArry() {
   return this.userform.get('cards') as FormArray
  }

  addcard() {
this.CardsFormsArry.push(new FormGroup({
  number:new FormControl(),
  name:new FormControl(),
  expiry:new FormControl(),
  cvv:new FormControl()
}))   

  }
  deletecard(i:any) {
    this.CardsFormsArry.removeAt(i)
  }


  submit() {
    console.log(this.userform.value);

  }
  eye() {
    this.showdata=!this.showdata;

  }


}