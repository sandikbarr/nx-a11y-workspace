import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Example {
  node: string;
  query: string;
  notes?: string;
}

@Component({
  selector: 'nx-a11y-workspace-example-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container
      *ngTemplateOutlet="
        examplesTable;
        context: { hasNotes: examplesHaveNotes }
      "
    ></ng-container>
    <ng-template #examplesTable let-hasNotes="hasNotes">
      <table>
        <tr>
          <th>Element</th>
          <th>Query</th>
          <th *ngIf="hasNotes">Notes</th>
        </tr>
        <tr *ngFor="let example of examples">
          <td>
            <pre>{{ example.node }}</pre>
          </td>
          <td>
            <pre>{{ example.query }}</pre>
          </td>
          <td *ngIf="hasNotes">{{ example.notes }}</td>
        </tr>
      </table>
    </ng-template>
  `,
  styles: [
    `
      table {
        width: 100%;
        border-spacing: 0;
      }
      th {
        text-align: left;
      }
      th,
      td {
        margin: 0;
        padding: 1rem;
        border: 0;
        border-top: 1px solid black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleListComponent {
  @Input() examples?: Example[];

  get examplesHaveNotes(): boolean {
    return !!this.examples?.find((example) => example.notes);
  }
}
