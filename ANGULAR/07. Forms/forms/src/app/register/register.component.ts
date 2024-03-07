import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// REACTIVE APPROACH FOR FORM BUILDING
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
    ],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  handleSubmit(): void {}
}
