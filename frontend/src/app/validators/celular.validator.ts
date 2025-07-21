import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function celularValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const celularRegex = /^(\(\d{2}\)\s?|\(\d{2}\)|\d{2})9\d{4}-?\d{4}$/;
    return celularRegex.test(value) ? null : { celularInvalido: true };
  };
}
