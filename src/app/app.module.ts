import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { from, fromEvent } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeDataComponent } from './employe-data/employe-data.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashbordComponent,
    ErrorComponent,
    WellcomeComponent,
    CalcultorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DataBindingComponent,
    DirectivesComponent,
    EmployeDataComponent,
    VehiclesComponent,
    FlipcartComponent,
    MailComponent,
    WeatherComponent,
    ImagetaskComponent,
    CreatevehicleComponent,
    CreatestudentCartComponent,
    AddcardComponent,
    CreateUserComponent,
    UserTaskComponent,
    AccountusapiComponent,
    AddacountComponent,
    VehicleDetailsComponent,
    ViewStudentComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    RatingComponent,
    CapitalDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
