import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  //^\w{6,}@(abv|gmail)\.(com|bg)$/gm

  const domainStrings = domains.join('|');
  const regExp = new RegExp(`^w{6,}@(abv|gmail).(${domainStrings})$`);
  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
