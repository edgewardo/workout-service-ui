import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonLocationComponent } from '../person-location/person-location.component';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
    PersonLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-person-location *ngFor="let myperson of personList" [myperson]="myperson"></app-person-location>
  </section>
  `,
  styleUrl: './person.component.css'
})
export class PersonComponent {
  personList: Person[] = [];
  personService: PersonService = inject(PersonService);

  constructor() {
    this.personList = this.personService.getAllPersons();
  }
}
