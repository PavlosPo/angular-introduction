import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Pavlos";
  lastname: string = "Poulos";

  person: Person = { 
    givenName: 'Pavlos',
    surName: 'Poulos',
    age: 23,
    email: 'pav.poulos@aueb.gr',
    address: 'Athens, Greece'
  }

  person2: Person = { 
    givenName: 'Giwrgos',
    surName: 'Chatz',
    age: 22,
    email: 'george.poulos@aueb.gr',
    address: 'Athens, Greece'
  }
}
