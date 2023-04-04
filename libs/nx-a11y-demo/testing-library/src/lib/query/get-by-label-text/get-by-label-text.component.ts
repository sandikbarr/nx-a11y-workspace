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
})
export class GetByLabelTextComponent {
  name = 'ByLabelText';
  href = 'https://testing-library.com/docs/queries/bylabeltext';

  examples: Example[] = [
    {
      node: `<label for="username">Username</label>
<input id="username"/>`,
      query: `getByLabelText('Username', { selector: 'input' })`,
    },
    {
      node: `<label><input type="checkbox"> Consent</label>`,
      query: `getByLabelText('Consent')`,
    },
  ];

  infos = [
    `
It is useful to query a form element by the label text to validate that
the label is associated to the form control with either an explicit or
implicit relationship.
`,
    `
<ul>
  <li>
    A form control nested inside a <code>&lt;label&gt;</code>
    creates an implicit association
  </li>
  <li>
    A <code>&lt;label&gt;</code> with a for attribute that matches
    the id of a form control creates an explicit association
  </li>
</ul>
`,
    `
<code>ByLabel</code> queries can also be narrowed using the element
<code>selector</code> option. Using a <code>ByRole</code> query with the
<code>name</code> option is equivalent to the <code>ByLabel</code> query
with the <code>selector</code> option. The <code>selector</code> option
is often more convenient is more closely aligned to an element's
template code, so using the <code>ByLabel</code> query does not require
knowledge of ARIA role specifics.
`,
  ];
}
