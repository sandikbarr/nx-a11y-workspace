import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-a11y-live-announcer',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>live-announcer works!</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveAnnouncerComponent {}
