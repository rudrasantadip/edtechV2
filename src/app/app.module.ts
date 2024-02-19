import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
