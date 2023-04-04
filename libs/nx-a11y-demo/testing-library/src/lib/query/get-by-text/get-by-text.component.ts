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
export class GetByTextComponent {
  name = 'ByText';
  href = 'https://testing-library.com/docs/queries/bytext';

  examples: Example[] = [
    {
      node: ``,
      query: ``,
    },
    {
      node: ``,
      query: ``,
    },
  ];
  infos: string[] = [];
}
