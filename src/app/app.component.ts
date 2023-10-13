import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Pavlos";
  lastname: string = "Poulos";

  person = {
    givenName: 'Pavlos',
    surName: 'Poulos',
    age: 23,
    email: 'pav.poulos@aueb.gr'
  }
}
