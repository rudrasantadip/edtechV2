import { Injectable } from '@angular/core';
import { NavigationData } from '../components/navigation/navigation.component';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LoginStatus{
  isLoggedIn:boolean,
  loggedinAs:string
}

export interface Widgets
{
  color:string,
  text:string
}

@Injectable({
  providedIn: 'root'
})
export class NavshareService
{
  sharedNavbar= new BehaviorSubject<NavigationData[]>([])
  widgets= new BehaviorSubject<Widgets[]>([
    {color:'btn btn-primary',text:'Login'},
    {color:'btn btn-light',text:'Signup'}
  ]);


  loginStatus= new BehaviorSubject<LoginStatus>({
    isLoggedIn:false,
    loggedinAs:''
  });

  constructor() { }

  //set navigation bar data
  setNav(data:NavigationData[])
  {
    this.sharedNavbar.next(data);
  }

  //get navigation bar data
  getNav():Observable<NavigationData[]>
  {
    return this.sharedNavbar;
  }

  //set log in status
  getLoginStatus()
  {
    return this.loginStatus
  }

  // set the logged in status
  setLoginStatus(isLoggedin:boolean, loggedinAs:string)
  {
    const status:LoginStatus={
      isLoggedIn: isLoggedin,
      loggedinAs: loggedinAs
    }
    this.loginStatus.next(status)
  }

  getWidgets()
  {
    return this.widgets;
  }

  setWidgets(widgets:Widgets[])
  {
    this.widgets.next(widgets);
  }
}
