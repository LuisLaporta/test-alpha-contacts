import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function telefoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const telefoneRegex = /^(\(\d{2}\)\s?|\(\d{2}\)|\d{2})\d{4}-?\d{4}$/;
    if (/^(\(\d{2}\)\s?|\(\d{2}\)|\d{2})9\d{4}-?\d{4}$/.test(value)) {
      return { telefoneInvalido: true };
    }
    return telefoneRegex.test(value) ? null : { telefoneInvalido: true };
  };
}
