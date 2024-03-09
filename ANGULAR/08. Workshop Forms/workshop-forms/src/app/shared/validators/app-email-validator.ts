import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(
  domains: string[]
  // clients: string[]
): ValidatorFn {
  //^\w{6,}@(abv|gmail)\.(com|bg)$/gm
  // [^@]{6,}@gmail\.(${domainStrings})$

  const domainStrings = domains.join('|');
  // const emailClients = clients.join('|');
  const regExp = new RegExp(`[^@]{6,}@(abv|gmail)\.(${domainStrings})$`);
  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
