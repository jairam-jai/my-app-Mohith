import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutProductComponent } from './about-product/about-product.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutUsComponent,
    AboutProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
