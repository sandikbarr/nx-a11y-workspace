import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusableOption } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-expansion-menu-item]',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionMenuItemComponent implements FocusableOption {
  @Input() label!: string;

  @HostBinding('role')
  role = 'menuitem';

  @HostBinding('tabindex')
  tabIndex = -1;

  disabled?: boolean;

  constructor(private element: ElementRef) {}

  focus() {
    this.element.nativeElement.focus();
  }

  getLabel(): string {
    return this.label;
  }
}
