import { Validators } from '@angular/forms';
import { InfosConfig } from '../models/infos-config.interface';
import { celularValidator } from '../validators/celular.validator';
import { telefoneValidator } from '../validators/telefone.validator';
import { nascimentoValidator } from '../validators/nascimento.validator';

export const infosConfig: InfosConfig = {
  fields: [
    {
      label: 'Nome Completo',
      formControlName: 'nome_completo',
      type: 'text',
      required: true,
      placeholder: 'EX.: Luis Laporta',
      errorMessages: {
        required: 'Nome completo é obrigatório'
      },
      validators: [Validators.required]
    },
    {
      label: 'Data de Nascimento',
      formControlName: 'data_nascimento',
      type: 'date',
      required: true,
      placeholder: 'EX.: 02/03/2002',
      errorMessages: {
        required: 'Data de nascimento é obrigatória',
        futureDate: 'Data de nascimento inválida'
      },
      validators: [Validators.required, nascimentoValidator()]
    },
    {
      label: 'E-mail',
      formControlName: 'email',
      type: 'email',
      required: true,
      placeholder: 'EX.: lui.laporta99@gmail.com',
      errorMessages: {
        required: 'E-mail é obrigatório',
        email: 'E-mail inválido'
      },
      validators: [Validators.required, Validators.email]
    },
    {
      label: 'Profissão',
      formControlName: 'profissao',
      type: 'text',
      required: true,
      placeholder: 'EX.: Desenvolvedor Web',
      errorMessages: {
        required: 'Profissão é obrigatória'
      },
      validators: [Validators.required]
    },
    {
      label: 'Telefone para contato',
      formControlName: 'telefone',
      type: 'text',
      required: true,
      placeholder: 'EX.: (11) 4033-2019',
      errorMessages: {
        required: 'Telefone é obrigatório',
        telefoneInvalido: 'Telefone em formato inválido'
      },
      validators: [Validators.required, telefoneValidator()]
    },
    {
      label: 'Celular para contato',
      formControlName: 'celular',
      type: 'text',
      required: true,
      placeholder: 'EX.: (11) 95696-3088',
      errorMessages: {
        required: 'Celular é obrigatório',
        celularInvalido: 'Celular em formato inválido'
      },
      validators: [Validators.required, celularValidator()]
    },
  ]
};
