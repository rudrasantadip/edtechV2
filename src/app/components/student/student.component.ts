import { Component, OnInit } from '@angular/core';
import { NavshareService } from 'src/app/services/navshare.service';
import { NavigationData } from '../navigation/navigation.component';

export const studentNav:NavigationData[]=[
  {
    item:'Courses',
    routerLink:'student/courses'
  },
  {
    item:'Enrolled Courses',
    routerLink:'student/enrolled-courses'
  },
  {
    item:'Schedule',
    routerLink:'student/schedule'
  },
  {
    item:'Live Doubt',
    routerLink:'student/live-doubt'
  }
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit
 {
  constructor(private navShare:NavshareService)
  {

  }
  ngOnInit(): void {
    this.navShare.setNav(studentNav) // setting the nav bar data for students
    this.navShare.setWidgets([{color:'btn btn-danger',text:'Logout'},{color:'btn btn-light',text:'rudrasantadip'}]) // settting the color and changing name of the butons
  }
}
