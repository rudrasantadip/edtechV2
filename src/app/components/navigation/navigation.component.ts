import { Component, HostListener, OnChanges, OnInit, Signal, SimpleChanges, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus, NavshareService, Widgets } from 'src/app/services/navshare.service';

//interface to represent the nav ar items
export interface NavigationData
{
  item:string;
  routerLink:string;
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit,OnChanges
{
  
  //signal to shrink the menubar
    shrinkMenu= signal(false);
    //variable to store the screen width
    screenWidth:number;
    //variable to hold the navigation items
    standardNavbar:NavigationData[]=[];

    //variable to check the login status
    loginStatus!:LoginStatus

    
    // to handle button based on if user is logged in or out
    widgets:Widgets[]=[]


    constructor(private router:Router, private navShare:NavshareService)
    {
      this.screenWidth=window.innerWidth;
    }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    //getting the current navigation bar data
    this.navShare.getNav().subscribe(
      (response)=>
        {
          this.standardNavbar=response;
        }
    );
    //checking if the user is logged in or not
    this.navShare.getLoginStatus().subscribe(
      (response)=>
        {
          this.loginStatus=response;
        }
    );

    //fetching the widget properties such as button color and text
    this.navShare.getWidgets().subscribe(
      (response)=>
        {
          this.widgets=response;
        }
    );


  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update screenWidth when the window is resized
    this.screenWidth = event.target.innerWidth;
  }
    

    //Function to adjust the menubar width
    toolbarSize():string
    {
      if((this.screenWidth>=950))
      {
        return '100%';
      }
      if(this.shrinkMenu())
      {
        return '150px';
      }

      else
      {
        return '250px';
      }
    }

    //function to handle the logo size
    logoSize():string
    {
      if(this.screenWidth<=950)
      {
        return '80';
      }
      else
      {
        return '100';
      }
    }

    // function to handle the button size
    buttonSize()
    {
      if(this.screenWidth>=950)
      {
        return '150px';
      }
      else
      {
        return '100px';
      }
    }

    //navigate to the signup component
    signup()
    {
      this.router.navigate(['register']);
    }

    //navigate to the login component
    login()
    {
      this.router.navigate(['login']);
    }

}
