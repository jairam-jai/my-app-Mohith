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
