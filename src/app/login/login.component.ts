import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userName = '';
	password = '';
	debugOutput = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  submitLogin(userName: string, password: string) {
    this.userName = userName;
	this.password = password;
	if (this.userName !== 'user' || this.password !=='pass')
	{
		this.debugOutput = '<p>Error: The inputted username and password is invalid.</p>';
	}
	else
	{
		this.debugOutput = '<p>The password is correct.</p>';
	}
  }

}
