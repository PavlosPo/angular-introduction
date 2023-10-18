import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenDormComponent } from './template-driven-dorm/template-driven-dorm.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';

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
export class AppComponent implements OnInit{

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
  
  users : Person[] = [];
  sentUser: Person | undefined;

  constructor(private appService: AppService = Inject(AppService)) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    })
  }
  
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
