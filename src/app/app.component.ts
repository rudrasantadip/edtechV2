import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { NavigationData } from './components/navigation/navigation.component';
import { LoginStatus, NavshareService } from './services/navshare.service';

// standard navigation bar items
export const navBardata:NavigationData[] =[
  {
    item:'Categories',
    routerLink:'categories'
  },
  {
    item:'Teach with us',
    routerLink:'teachwithus'
  },
  {
    item:'Join our venture',
    routerLink:'about'
  },
  {
    item:'about',
    routerLink:'about'
  }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  loginStatus!:LoginStatus;
  constructor(private ngxService: NgxUiLoaderService, private navshare:NavshareService) {}  
 
  ngOnInit(): void 
  {

    //checking if any user is logged in or not
    this.navshare.getLoginStatus().subscribe(
      (response)=>
        {
          this.loginStatus=response;
        }
    );

    //if the user is logged in as student, show the student navigation bar
   
    //when the root is loaded, the standard navigation items are shown by default
    //if no one is logged in
    this.navshare.setNav(navBardata);

   
    //loader  service
    this.ngxService.start();
    setTimeout(()=>{this.ngxService.stop()},3000
    )
  }
  title = 'edtech';

  
}
