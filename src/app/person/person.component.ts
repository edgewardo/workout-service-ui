import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonLocationComponent } from '../person-location/person-location.component';
import { Person } from '../person';

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
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  personList: Person[] = [
    {
      id: 1,
      firstName: 'Eric',
      lastName: 'Ward',
      height: 68,
      weight: 200,
    },
    {
      id: 2,
      firstName: 'Sandy',
      lastName: 'Ward',
      height: 64,
      weight: 190,
    },

  ];
}
