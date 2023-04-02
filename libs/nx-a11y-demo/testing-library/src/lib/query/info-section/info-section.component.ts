import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-a11y-workspace-info-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section aria-label="info">
      <div class="info" *ngFor="let info of infos" [innerHtml]="info"></div>
    </section>
  `,
  styles: [
    `
      .info {
        margin: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoSectionComponent {
  @Input() infos?: string[];
}
