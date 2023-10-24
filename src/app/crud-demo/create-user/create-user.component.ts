import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private appService: AppService = inject(AppService)) {}
  
  onUser(user: Person) {
    this.appService.addUser(user).subscribe()
    console.log(user)
  }
}
