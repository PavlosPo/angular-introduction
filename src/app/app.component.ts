import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenDormComponent } from './template-driven-dorm/template-driven-dorm.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    PersonComponent,
    PersonAltComponent,
    EventBindComponent,
    OutputDemoComponent,
    PersonCardComponent,
    TemplateDrivenDormComponent,
    ReactiveFormComponent],
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
  };

  users: Person[] = [
    {
      photoUrl: 'https://i.pravatar.cc/?img=1',
      givenName: 'John',
      surName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=2',
      givenName: 'Jane',
      surName: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=3',
      givenName: 'Jim',
      surName: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=4',
      givenName: 'Jill',
      surName: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=5',
      givenName: 'Jake',
      surName: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=6',
      givenName: 'Judy',
      surName: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=7',
      givenName: 'Jack',
      surName: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=8',
      givenName: 'Julie',
      surName: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=9',
      givenName: 'Jerry',
      surName: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    },
    {
      photoUrl: 'https://i.pravatar.cc/?img=10',
      givenName: 'June',
      surName: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    },
  ];

  sentUser: Person | undefined;

  onDeleteUser(i: number) {
    this.users.splice(i,1)
  }

  onSendUser(user: Person) {
    console.log(user)
    this.sentUser = user;
  }

  onNewPerson(person: Person) {
    this.users.push(person)
  }
}
