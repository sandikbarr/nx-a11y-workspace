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
export class GetByRoleComponent {
  name = 'ByRole';
  href = 'https://testing-library.com/docs/queries/byrole';

  examples: Example[] = [
    {
      node: `<button>Submit</button>`,
      query: `getByRole('button', { name: /submit/i })`,
    },
    {
      node: `<h1>hello <span>world</span></h1>`,
      query: `getByRole('heading', { name: /hello world/i })`,
    },
  ];

  infos = [
    `
In Tim Deschryver's article,
<a href="https://timdeschryver.dev/blog/making-sure-youre-using-the-correct-query"
  >Make Sure You're Using The Correct Query</a>,
he states that one of the main focuses of Testing Library is
Accessibility. Testing Library's queries are intentionally user centered
and accessible by default.
    `,
    `
<code>ByRole</code> queries are most often used with the
<code>name</code> option to select elements by their accessible role and
name. An element's accessible name is the information used by assistive
technologies to provide the element's label or purpose. Every element in
the accessibility tree should be available by role. An interactive
element that cannot be queried by role and name is very likely not
accessible.    
    `,
  ];
}
