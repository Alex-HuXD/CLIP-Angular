import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };
  login = false
  loginMsg = 'logging in ...'
  onLogin = () => {
    this.login = true
    console.log('login() has been called')
  }
}
