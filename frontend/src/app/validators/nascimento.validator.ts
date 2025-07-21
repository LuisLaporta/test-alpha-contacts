import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function nascimentoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const dataInformada = new Date(value);
    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    
    if (dataInformada >= dataAtual) {
      return { futureDate: true };
    }
    
    return null;
  };
}