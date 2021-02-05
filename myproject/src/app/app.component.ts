import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  UserName: string;
  Password: string;
  LoginForm:boolean=true;
  constructor(private router:Router)
  {

  }
  ValidateUser() 
  {
    if (this.UserName=="Admin" && this.Password=="Admin") 
    {
      this.router.navigate(['/Register']);
      this.LoginForm=false;
    }
    else
     {
      alert("Invalid User");
    }

  }
}
