import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-a11y-list-key-manager',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>list-key-manager works!</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListKeyManagerComponent {}
