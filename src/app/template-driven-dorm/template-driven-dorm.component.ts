import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-template-driven-dorm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-dorm.component.html',
  styleUrls: ['./template-driven-dorm.component.css']
})
export class TemplateDrivenDormComponent {
  @Output() person = new EventEmitter<Person>();
  
  onSubmit(form: any) {
    console.log(form.value as Person)
    this.person.emit(form.value as Person);
    form.reset();
  }
}
