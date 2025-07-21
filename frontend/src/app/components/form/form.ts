import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { infosConfig } from '../../config/infos-config';
import { Contacts } from '../../models/contacts.interface';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit, OnChanges{
  infosTypes = infosConfig.fields;
  form!: FormGroup;

  radios = [
    {id: 'tem_whatsapp', label:'Número de celular possui Whatsapp'},
    {id: 'notificacoes_email', label:'Enviar notificações por E-mail'},
    {id: 'notificacoes_sms', label:'Enviar notificações por SMS'}
  ];

  @Input() contact: Contacts | null = null;
  @Input() isEditing: boolean = false;
  @Output() submitEvent = new EventEmitter<Contacts>();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.isEditing && this.contact) {
      this.populateForm(this.contact);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contact'] && this.contact) {
      this.populateForm(this.contact);
    }
  }

  initForm() {
    const controlsConfig: any = {};
    this.infosTypes.forEach(field => {
      controlsConfig[field.formControlName] = ['', field.validators || []];
    });
    this.radios.forEach(radio => {
      controlsConfig[radio.id] = [false];
    })
    this.form = this.fb.group(controlsConfig);
  }

  populateForm(contact: Contacts) {
    this.form.patchValue({
      nome_completo: contact.nome_completo,
      data_nascimento: contact.data_nascimento,
      email: contact.email,
      celular: contact.celular,
      telefone: contact.telefone,
      profissao: contact.profissao,
      notificacoes_email: contact.notificacoes_email,
      notificacoes_SMS: contact.notificacoes_SMS,
      tem_whatsapp: contact.tem_whatsapp
    });
  }

  onSubmit() {
    const cehkConfig = this.form.value;

    cehkConfig.tem_whatsapp = cehkConfig.tem_whatsapp ? 1 : 0;
    cehkConfig.notificacoes_email = cehkConfig.notificacoes_email ? 1 : 0;
    cehkConfig.notificacoes_sms = cehkConfig.notificacoes_sms ? 1 : 0;

    if (this.form.valid) {
      const contactData: Contacts = this.form.value;
      this.submitEvent.emit(contactData);
      this.form.reset();
      if (this.isEditing) {
        this.form.reset();
      }
    }
  }
}
