import { Component, Signal, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavshareService } from 'src/app/services/navshare.service';
import { NavigationData } from '../navigation/navigation.component';


//navigation data for student


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isEmailValid = signal(true) // signal to check the email input box
  isPasswordValid = signal(true) // signal to check if the password is valid
  selectedOption:string='' // variable to check the selected option {teacher or student}

  constructor(private router:Router,private navShare:NavshareService)
  {

  }
  
  //When user chooses an option between student or teacher this function will be called
  onSelectChange(event:Event)
  {
    this.selectedOption = (event.target as HTMLSelectElement).value;

    switch(this.selectedOption)
    {
      case 'teacher':
        console.log('teacher');
        break;
      case 'student':
        console.log('student');
        break;
      default:
        console.log('unknown');
    }
  }


  validateEmail(email:string):boolean
  {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email)
  }

  validatePassword(password:string):boolean
  {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
  }

  //Function to be called when user loggs in
  login(form:NgForm)
  {
    if(form.value.password=='' || form.value.email=='') // if the user does not enter any value in either of the input box
    {
        this.isEmailValid.set(false);
        this.isPasswordValid.set(false);
        alert('Credentials cannot be empty');
    }
    else
    {
      //validate if proper format of email and password has been given?
      //YES
      if((this.validateEmail(form.value.email)==true) && (this.validatePassword(form.value.password)==true))
      {
        this.isEmailValid.set(true);
        this.isPasswordValid.set(true);
        alert(`${form.value.email} & ${form.value.password}`);
        // db validation can be done from here
        this.navShare.setLoginStatus(true,'student'); // setting the login status as true
        this.router.navigate(['student']); // navigating to the student component
      }
      //NO
      else
      {
        this.isEmailValid.set(false);
        this.isPasswordValid.set(false);
        alert('Invalid format of either email or password');
      }
    }
  }
}
