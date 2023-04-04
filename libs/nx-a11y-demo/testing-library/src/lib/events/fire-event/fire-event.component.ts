import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleListComponent } from '../../query/example-list/example-list.component';
import { InfoSectionComponent } from '../../query/info-section/info-section.component';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleListComponent, InfoSectionComponent],
  template: `
    <h1>
      <a [href]="href">{{ name }}</a>
    </h1>
    <nx-a11y-workspace-info-section></nx-a11y-workspace-info-section>
    <h2>Examples</h2>
    <nx-a11y-workspace-example-list></nx-a11y-workspace-example-list>
  `,
  styles: [],
})
export class FireEventComponent {
  name = '';
  href = '';
}
