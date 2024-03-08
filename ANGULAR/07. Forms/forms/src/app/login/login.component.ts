import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

//! TEMPLATE DRIVEN FORM

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Another way to get the form (no need to pass the form to the handler)
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  @ViewChild('emailInputRef') emailInputRef: NgModel | undefined;

  ngOnInit(): void {
    // will render only the static content
  }

  // log errors while typing in the input
  logErrors(): void {
    if (this.emailInputRef?.errors) {
      console.log(this.emailInputRef.errors);
    }
  }

  // copied(): void {
  //   console.log('copied');
  // }

  // logChange() {
  //   console.log(this.emailInputRef?.value);
  // }

  // ngAfterViewInit(): void {
  //will render the final view of the component with the dynamic content
  // }
  submitHandler(): void {
    // need to do the check in order to work
    if (!this.loginForm) return;
    const form = this.loginForm;
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
