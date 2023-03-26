import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>
      <input type="checkbox" [checked]="isChecked" />
      {{ label }}
    </label>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() isChecked?: boolean;
  @Input() label!: string;
}
