import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ErrorComponent } from './error/error.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeDataComponent } from './employe-data/employe-data.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { ImagetaskComponent } from './imagetask/imagetask.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashbord',component:DashbordComponent,children:[
    {path:'',component:HomeComponent},
    {path:'wellcome',component:WellcomeComponent},
    {path:'calcultor',component:CalcultorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
   {path:'vehicles',component:VehiclesComponent},
   {path:'flipcart',component:FlipcartComponent},
   {path:'mail',component:MailComponent},
   {path:'weather',component:WeatherComponent},
  {path:'imagetask',component:ImagetaskComponent},
  {path:'createvehicle',component:CreatevehicleComponent}


    
  ]},
  {path:'employe-data',component:EmployeDataComponent},
  {path:'**',component:ErrorComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
