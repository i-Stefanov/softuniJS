import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    // provide the directive to itself but make it a validator
    { provide: NG_VALIDATORS, useExisting: MaxCountDirective, multi: true },
  ],
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // control.value is the value in the input
    if (
      this.appMaxCount === undefined ||
      control.value?.length <= this.appMaxCount
    ) {
      return null;
    }
    return { appMaxCount: this.appMaxCount };
  }
}
