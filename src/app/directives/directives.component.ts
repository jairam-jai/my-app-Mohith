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

}
