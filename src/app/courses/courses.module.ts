import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ServiceService } from './service.service'

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFeaturedComponent } from './course-featured/course-featured.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseCategoryComponent } from './course-category/course-category.component';

import { MatButtonModule,  } from '@angular/material/button';


@NgModule({
  declarations: [
    CourseFeaturedComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseRecentComponent,
    CourseCategoryComponent,
    // ServiceService
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    
  ],
  exports:[
    CourseFeaturedComponent
  ]
})
export class CoursesModule { }
