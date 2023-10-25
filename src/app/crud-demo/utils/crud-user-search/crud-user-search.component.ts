import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css']
})
export class CrudUserSearchComponent {
  
  constructor(private appService: AppService = inject(AppService)) {}

  foundUser: Person | undefined;
  userNotFound = false;
    // this binds with the html #userId flag, set on html element 'input'
    // also we set it as ElementReference and cast it as HTMLInputElement
  @ViewChild('userId') userIdInput! : ElementRef<HTMLInputElement>
  @Output() userFound = new EventEmitter<Person | undefined>();
  
  onSearch() {
    const id = this.userIdInput.nativeElement.value
    this.appService.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        console.log(user)
        this.foundUser = user;
        this.userNotFound = false
        this.userFound.emit(this.foundUser)
      },
      error: (error) => {
        console.log(error);
        this.foundUser = undefined;
        this.userNotFound = true;
        this.userFound.emit(this.foundUser);
      },
      complete: () => {
        console.log('Operation Completed');
      }
    })
  }
}
