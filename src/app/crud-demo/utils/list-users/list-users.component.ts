import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Person[] = [];

  constructor(private service: AppService = Inject(AppService)) {}

  ngOnInit(): void {
    // after getting the method getAllUsers, we .subscribe() on them
    // to actually run the Http GET command on getAllUsers.
    this.service.getAllUsers().subscribe(users => {
      this.users = users
    })
}


}
