import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { Form } from "../../components/form/form";
import { ContactService } from '../../services/contato';
import { Contacts } from '../../models/contacts.interface';
import { ContactsTable } from "../../components/contacts-table/contacts-table";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-registration-contacts',
  imports: [Form, ContactsTable, Header, Footer],
  templateUrl: './registration-contacts.html',
  styleUrl: './registration-contacts.css'
})
export class RegistrationContacts implements OnInit {
  contacts: Contacts[] = [];
  isEditing: boolean = false;
  currentContact: Contacts | null = null;

  constructor(
    private contactService: ContactService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContatos().subscribe((c: Contacts[]) => {
      this.contacts = c;
      this.cdr.detectChanges();
    });
  }

  private resetFormState() {
    this.isEditing = false;
    this.currentContact = null;
  }

  onFormSubmit(contactData: Contacts) {
     if (this.isEditing && this.currentContact) {
    const updatedContact = { ...contactData, id: this.currentContact.id };
    
    const index = this.contacts.findIndex(c => c.id === this.currentContact?.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
      this.contacts = [...this.contacts];
    }
    
    this.contactService.updateContact(updatedContact).subscribe(() => {
      this.getContacts();
    });
    
    this.resetFormState();
    } else {
      this.contactService.newContact(contactData).subscribe(() => {
        this.getContacts();
      });
    }
  }

  deleteContact(id: number) {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contactService.deleteContact(id).subscribe({
        next: () => {
          this.getContacts();
          alert('Contato excluído com sucesso!');
        },
      });
    }
  }

  onEditContact(contact: Contacts) {
    this.currentContact = contact;
    this.isEditing = true;
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }
}
