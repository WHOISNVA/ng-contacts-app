import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  private _url: string = "/assets/data/contacts.json";

  getContacts(): Observable<Contact[]>{
   return this.http.get<Contact[]>(this._url);
  }
}
