import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  ages:number[]=[10,20,30,40,50,60,70,40]
  states:string[]=['Andra Pradesh','Telangana', 'Keral','tamilnadu','Karnataka']

  detiles:any[]=[
    {name:'Raj',number:100,email:2.3},
    {name:'mahesh',number:200,email:3.4},
    {name:'ramudu',number:700,email:2.1},
    {name:'kumar',number:1000,email:4.0},
    {name:'veda',number:10000,email:5}

  ]

  today:any = new Date();

  employees: any = [
    {name:'sandeep',expression:5,package:1200000,role:'UIdevalapar'},
    {name:'raju',expression:4,package:1300000,role:'UIdevalapar'},
    {name:'rama',expression:2,package:1600000,role:'testing devalapar'},
    {name:'kishoor',expression:3,package:1500000,role:'software devalapar'},
    {name:'Aravind',expression:5,package:1800000,role:'testing devalapar'},
    {name:'somya',expression:7,package:1900000,role:'data devalapar'},
    {name:'sindhu',expression:9,package:1200000,role:'data devalapar'},
    {name:'kumar',expression:12,package:1100000,role:'testing devalapar'},
    {name:'jayaram',expression:9,package:1800000,role:'software devalapar'}
  ]

  name:string='';
  experience:number=0;
  package:number=0;
  role:string='';

  add() {
    let employee= {
    name:this.name,
    expression:this.experience,
    package:this.package,
    role:this.role
    }
    this.employees.unshift(employee)
  }




  delete(i:number) {
    // alert(i)
    this.employees.splice(i,1);
  }

  Hightolow() {
    this.employees.sort((a:any,b:any)=>b.package-a.package);
  }

  rolee:any='';
  rolefilter() {
    this.employees=this.employees.filter((employees:any)=>employees.role==this.role);
  }
  term:any='';
  search() {
this.employees=this.employees.filter((employees:any)=>employees.name.includes(this.term));

  }

  addbouns() {
  this.employees.map((employee:any)=> {
    employee.package=employee.package+50000;
    return employee;
  });

  }

}
