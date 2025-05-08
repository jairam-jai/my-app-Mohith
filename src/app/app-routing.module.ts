import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashbord',component:DashbordComponent,children:[
    {path:'home',component:HomeComponent} 

  ]},
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
