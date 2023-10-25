import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserSearchComponent } from "../../utils/crud-user-search/crud-user-search.component";
import { Person } from '../../../interfaces/person';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-update-user',
    standalone: true,
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css'],
    imports: [CommonModule, CrudUserSearchComponent, CrudUserFormComponent]
})
export class UpdateUserComponent {

  @Output() userUpdated = new EventEmitter();
  foundUser: Person | undefined;

  constructor(private appService: AppService = inject(AppService)) {}

  onUserFound(user : Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onUpdate(user: Person) {
    
    this.appService.updateUser(user).subscribe(user => {
      console.log(user);
      this.userUpdated.emit();
    })
  }

}
