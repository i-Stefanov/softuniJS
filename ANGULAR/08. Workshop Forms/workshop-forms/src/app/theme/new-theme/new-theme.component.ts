import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  newThemeSubmitHandler(newThemeForm: NgForm): void {
    if (newThemeForm.invalid) {
      return;
    }
    console.log(newThemeForm.value);
  }
}
