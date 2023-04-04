import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>
      {{ label }}
      <select>
        <ng-content></ng-content>
      </select>
    </label>
  `,
  styles: [],
})
export class SelectComponent {
  @Input() label?: string;
}
