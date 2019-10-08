import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInput = '';
  passwordInput = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.loginInput.length > 3 && this.passwordInput.length > 3) {
      this.router.navigate(['posts']);
    }
  }

  registration() {
    this.router.navigate(['registration']);
  }
}
