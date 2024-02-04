import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersonComponent,
  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-person></app-person>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'workout';
}
