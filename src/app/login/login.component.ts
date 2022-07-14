import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
	debugOutput = '';

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  
  
  onSubmit(): void {
    if (this.loginForm.get('userName')?.value !== 'user' || this.loginForm.get('password')?.value !== 'pass')
	{
		this.debugOutput = 'Error: The inputted username and password is invalid.';
	}
	else
	{
		this.debugOutput = 'The password is correct.';
	}
    this.loginForm.reset();
  }
}
