import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TeachwithusComponent } from './components/teachwithus/teachwithus.component';
import { AboutComponent } from './components/about/about.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
