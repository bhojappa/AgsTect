import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private _formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this._formbuilder.group({
      Eno: ["",Validators.required],
      Ename: ["",Validators.required],
      Salary: ["",Validators.required],
      Gender: ["",Validators.required],
      Designation: ["",Validators.required],  
    });
  
  }
  Designation = [
    {id: '1', value:'Admin'},
    {id: '2', value:'Manger'},
    {id: '3', value:'jr.Employee'}
  ];
  Register()
  {
    debugger
    this.registerForm.value;
    console.log(this.registerForm.value);
  }

}

