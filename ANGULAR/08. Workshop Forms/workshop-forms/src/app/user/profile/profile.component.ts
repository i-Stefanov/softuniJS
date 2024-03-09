import { Component } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { constants } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

interface Profile {
  username: string;
  email: string;
  tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isInEditMode: boolean = false;
  profileDetails: Profile | undefined;
  constructor(private fb: FormBuilder) {}
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, appEmailValidator(constants.DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
  });
  toggleEditMode(): void {
    this.isInEditMode = !this.isInEditMode;
  }
  saveProfileHandler(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.profileDetails = { ...this.userForm.value } as Profile;
    console.log(this.userForm.value);
    this.toggleEditMode();
  }
}
