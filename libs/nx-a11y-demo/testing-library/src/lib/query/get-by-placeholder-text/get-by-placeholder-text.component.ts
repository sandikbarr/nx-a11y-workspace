import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Example,
  ExampleListComponent,
} from '../example-list/example-list.component';
import { InfoSectionComponent } from '../info-section/info-section.component';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleListComponent, InfoSectionComponent],
  template: `
    <h1>
      <a [href]="href">{{ name }}</a>
    </h1>
    <nx-a11y-workspace-info-section
      [infos]="infos"
    ></nx-a11y-workspace-info-section>
    <h2>Examples</h2>
    <nx-a11y-workspace-example-list
      [examples]="examples"
    ></nx-a11y-workspace-example-list>
  `,
  styles: [],
})
export class GetByPlaceholderTextComponent {
  name = 'ByPlaceholderText';
  href = 'https://testing-library.com/docs/queries/byplaceholdertext';

  examples: Example[] = [
    {
      node: `<label for="username">Username or Email</label>
<input id="username" placeholder="username or email"/>`,
      query: `getPlaceholderText('username or email')`,
    },
    {
      node: `<input id="search" placeholder="Search"/>`,
      query: `getPlaceholderText('Search')`,
    },
  ];

  infos = [
    `
  Placeholder text on a form control is not an accessible substitute for a
  <code>&lt;label&gt;</code>. Placeholder text is no longer visible when a form
  control's value has been set and should not be used to provide instruction.
  Associating a <code>&lt;label&gt;</code> to a form control provides an
  accessible name. All form controls should be given an accessible name
  that is ideally visible and presented in the same manner for all users.  
  `,
  ];
}
