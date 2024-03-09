//! REACTIVE APPROACH TO HANDLE FORMS

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { constants } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  myForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      // appEmailValidator is a custom validator see app-email-validator.ts
      [Validators.required, appEmailValidator(constants.DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}
  logValidator() {
    console.log(
      this.myForm.get('passGroup')?.get('rePassword')
      // ?.[
      //   'matchPasswordsValidator'
      // ]
    );
  }
  register(): void {
    console.log(this.myForm.value);
    console.log();
  }
}
