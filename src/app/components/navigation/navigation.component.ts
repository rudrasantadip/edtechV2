import { Component, HostListener, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent 
{
  
  //signal to shrink the menubar
    shrinkMenu= signal(false);
    screenWidth:number;

    constructor()
    {
      this.screenWidth=window.innerWidth;
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
}
