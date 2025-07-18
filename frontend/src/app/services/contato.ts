import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private API_URL = "http://localhost:8000/api.php";
  
  constructor(private httpClinet: HttpClient) {}

  getContatos(): Observable<Object> {
    return this.httpClinet.get(this.API_URL);
  }

}
