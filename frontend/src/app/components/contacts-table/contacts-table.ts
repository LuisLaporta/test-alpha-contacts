import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacts } from '../../models/contacts.interface';

@Component({
  selector: 'app-contacts-table',
  imports: [CommonModule],
  templateUrl: './contacts-table.html',
  styleUrl: './contacts-table.css'
})

export class ContactsTable  {
  @Input() contacts: Contacts[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Contacts>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(contact: Contacts) {
    this.edit.emit(contact);
  }

  formatPhoneNumber(phone: string): string {
    if (!phone) return '';

    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11) {
      return `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7)}`;
    }

    return phone;
  }
}
