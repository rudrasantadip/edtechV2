import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TeachwithusComponent } from './components/teachwithus/teachwithus.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { CoursesComponent } from './components/student/courses/courses.component';
import { EnrolledCoursesComponent } from './components/student/enrolled-courses/enrolled-courses.component';
import { ScheduleComponent } from './components/student/schedule/schedule.component';
import { LiveDoubtComponent } from './components/student/live-doubt/live-doubt.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
  ,
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'teachwithus',
    component:TeachwithusComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'student',
    component:StudentComponent,
    children:[
      {path:'courses',component:CoursesComponent},
      {path:'',redirectTo:'courses',pathMatch:'full'},
      {path:'enrolled-courses',component:EnrolledCoursesComponent},
      {path:'schedule',component:ScheduleComponent},
      {path:'live-doubt',component:LiveDoubtComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
