import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';

import { Observable, throwError } from 'rxjs';
import {retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  private _url: string = "/assets/data/contacts.json";

  getContacts(): Observable<Contact[]>{
   return this.http.get<Contact[]>(this._url).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(errorHandler: any): Observable<Contact[]> {
    throw new Error("Method not implemented.");
  }


}
