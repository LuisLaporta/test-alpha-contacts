import { Component } from '@angular/core';
import { RadioOption } from "../radio-option/radio-option";
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { infosConfig } from '../../config/infos-config';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    RadioOption,
    Button
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  infosTypes = infosConfig.fields;
  form: FormGroup;

  radios = [
    {id: 'tem_whatsapp', label:'Número de celular possui Whatsapp', checked: false},
    {id: 'notificacoes_email', label:'Enviar notificações por E-mail', checked: false},
    {id: 'notificacoes_sms', label:'Enviar notificações por SMS', checked: false}
  ];

  constructor(private fb: FormBuilder) {
    const controlsConfig: any = {};
    this.infosTypes.forEach(field => {
      controlsConfig[field.formControlName] = ['', field.validators || []];
    });
    this.form = this.fb.group(controlsConfig);
  }

  getMask(controlName: string): string {
    if (!controlName) { return ''; }

    if (controlName === 'telefone') {
      return '(00) 0000-0000';
    }
    
    return '(00) 00000-0000';
  }
}
