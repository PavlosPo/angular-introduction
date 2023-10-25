import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-user-form.component.html',
  styleUrls: ['./crud-user-form.component.css']
})
export class CrudUserFormComponent implements OnChanges{
  
  @Input() title = 'User Form'
  @Input() personInput : Person | undefined;
  @Output() person = new EventEmitter<Person>()

  form = new FormGroup({
    id: new FormControl(0),
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(0,[
      Validators.required,
      Validators.min(18),
      Validators.max(120)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    photoUrl: new FormControl('')
  })

  onSubmit() {
    this.person.emit(this.form.value as Person)
    this.form.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if personInput exists get its value
    if (changes['personInput']?.currentValue) {
      this.form.patchValue(changes['personInput'].currentValue)
    }
  }
}
