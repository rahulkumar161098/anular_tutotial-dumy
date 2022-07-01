import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { StaticfilesModule } from './staticfiles/staticfiles.module'
import { AuthRoutingModule } from './auth/auth-routing.module'

const routes: Routes = [
  {path:'',redirectTo:'', pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CoursesRoutingModule, 
    StaticfilesModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
