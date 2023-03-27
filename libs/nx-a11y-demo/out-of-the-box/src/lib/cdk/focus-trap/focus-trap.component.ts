import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-a11y-focus-trap',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>focus-trap works!</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FocusTrapComponent {}
