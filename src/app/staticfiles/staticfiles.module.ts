import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticfilesRoutingModule } from './staticfiles-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    PageComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    StaticfilesRoutingModule
  ]
})
export class StaticfilesModule { }
