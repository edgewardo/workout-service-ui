import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

@Component({
  selector: 'app-person-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <h2 class="listing-heading">{{ myperson.firstName }} {{ myperson.lastName}}</h2>
    <p class="listing-location">Height: {{ myperson.height }}</p>
    <p class="listing-location">Weight: {{ myperson.weight }}</p>
  </section>
  `,
  styleUrl: './person-location.component.css'
})
export class PersonLocationComponent {
  @Input() myperson!: Person;
}
