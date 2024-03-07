import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitHandler(form: NgForm): void {
    //? form refers to the form in login
    //? using setValue all values can b reset after submit
    // form.setValue({
    //   email: '',
    //   password: '',
    // });

    if (form.invalid) {
      return;
    }
    console.log(form.value);
    const value: { email: string; password: string } = form.value;
  }
}
