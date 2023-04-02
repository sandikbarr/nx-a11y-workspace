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
export class GetByDisplayValueComponent {
  name = 'ByDisplayValue';
  href = 'https://testing-library.com/docs/queries/bydisplayvalue';

  examples: Example[] = [
    {
      node: `<textarea>
  Hello World
</textarea>`,
      query: `getByDisplayValue('Hello World', { exact: false })`,
    },
    {
      node: `<select>
  <option value="ID">Idaho</option>
  <option value="NE">Nebraska</option>
  <option selected value="AK">Alaska</option>
</select>`,
      query: `getByDisplayValue('Alaska')`,
    },
  ];

  infos = [
    `
Querying an <code>input</code>, <code>textarea</code>, or
<code>select</code> by its display value aligns with 
user expectations when interacting with form controls.  
  `,
  ];
}
