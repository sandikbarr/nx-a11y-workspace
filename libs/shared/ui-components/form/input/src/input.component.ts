import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

let uniqueIdCounter = 0;

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label ui-label [for]="id"><ng-content></ng-content></label>
    <input [id]="id" type="text">
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  id = uniqueIdCounter++;
}
