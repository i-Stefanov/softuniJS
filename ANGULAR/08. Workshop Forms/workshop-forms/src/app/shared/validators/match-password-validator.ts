import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  password1Control: string,
  rePassControl: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(password1Control);
    const rePass = group.get(rePassControl);

    return pass?.value === rePass?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
