// ! TEMPLATE DRIVEN APPROACH OF HANDLING FORMS

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = constants.DEFAULT_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {
    // console.log(form.value);
    if (form.invalid) {
      return;
    }
    // todo handle the data
    this.userService.login();
    this.router.navigate(['/']);
  }
}
