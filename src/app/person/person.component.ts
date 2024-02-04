import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by name">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  `,
  styleUrl: './person.component.css'
})
export class PersonComponent {

}
