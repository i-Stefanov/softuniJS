import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}
  logChange(e: Event) {
    console.log(e.target);
  }
  login(form: NgForm): void {
    console.log(form.value);
    // todo handle the data
    // this.userService.login();
    // this.router.navigate(['/']);
  }
}
