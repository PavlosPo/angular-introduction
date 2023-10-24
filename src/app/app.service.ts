import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // inject of HttpClient to the app service component
  constructor(private http: HttpClient = inject(HttpClient)) { }

  // this will be used outside of the app.component, 
  // again with the inject method
  getAllUsers() {
    return this.http.get<Person[]>('http://localhost:3000/users');
  }

  addUser(user: Person) {
    return this.http.post<Person>('http://localhost:3000/users', user);
  }
}
