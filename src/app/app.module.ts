import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TeachwithusComponent } from './components/teachwithus/teachwithus.component';
import { AboutComponent } from './components/about/about.component';
import { TopCategoryComponent } from './components/dashboard/top-category/top-category.component';
import { ContributeComponent } from './components/dashboard/contribute/contribute.component';
import { FooterComponent } from './components/footer/footer.component';
import 
{ NgxUiLoaderConfig, 
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
   PB_DIRECTION, 
   POSITION, 
   SPINNER } from "ngx-ui-loader";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { CoursesComponent } from './components/student/courses/courses.component';
import { EnrolledCoursesComponent } from './components/student/enrolled-courses/enrolled-courses.component';
import { ScheduleComponent } from './components/student/schedule/schedule.component';
import { LiveDoubtComponent } from './components/student/live-doubt/live-doubt.component';
import { CallComponent } from './components/student/call/call.component';
import { ParticipantComponent } from './components/student/participant/participant.component';

const masterLoaderConfig: NgxUiLoaderConfig =
{
  bgsColor:'red',
  fgsColor:'blue',
  pbColor:'blue',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness,
  blur:10
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CategoriesComponent,
    TeachwithusComponent,
    AboutComponent,
    TopCategoryComponent,
    ContributeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    CoursesComponent,
    EnrolledCoursesComponent,
    ScheduleComponent,
    LiveDoubtComponent,
    CallComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(masterLoaderConfig),
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
