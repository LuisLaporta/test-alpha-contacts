import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Contacts } from '../models/contacts.interface';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private API_URL = "http://localhost:8000/api.php";
  
  constructor(private httpClient: HttpClient) {}

  getContatos(): Observable<Contacts[]> {
    return this.httpClient.get<Contacts[]>(this.API_URL);
  }

  newContact(newCon: Contacts): Observable<Contacts> {
    return this.httpClient.post<Contacts>(this.API_URL, newCon);
  }

  updateContact(contact: Contacts): Observable<Contacts> {
    return this.httpClient.put<Contacts>(`${this.API_URL}/${contact.id}`, contact).pipe(
      tap(updatedContact => console.log('Contato atualizado:', updatedContact))
    );
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
