import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'ngfundamentals2';
}
