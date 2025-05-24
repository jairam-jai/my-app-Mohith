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
import { CreatestudentCartComponent } from './createstudent-cart/createstudent-cart.component';
import { AddcardComponent } from './addcard/addcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { AccountusapiComponent } from './accountusapi/accountusapi.component';
import { AddacountComponent } from './addacount/addacount.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashbord',component:DashbordComponent,canActivate:[AuthenticationGuard],children:[
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
    {path:'createvehicle',component:CreatevehicleComponent},
    {path:'createstudent-cart',component:CreatestudentCartComponent},
    {path:'addcard',component:AddcardComponent},
    {path:'edite-student/:id',component:AddcardComponent},

    {path:'create-user',component:CreateUserComponent},
    {path:'user-task',component:UserTaskComponent},
    {path:'accountsusapi',component:AccountusapiComponent},
    {path:'addacount',component:AddacountComponent},
    {path:'login',component:LoginComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'view-student/:id',component:ViewStudentComponent},
    {path:'edit-vehicle/:id',component:CreatevehicleComponent},
    {path:'communication',component:CommunicationComponent}, 
    {path:'parent',component:ParentComponent}, 
    {path:'sibling1',component:Sibling1Component}, 

  ]},
  // lagy loading 
   {
    path:'payments',
    loadChildren:()=>import('./payments/payments.module').then(m=>m.PaymentsModule)
  },
  {path:'employe-data',component:EmployeDataComponent},
  {path:'**',component:ErrorComponent},
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
