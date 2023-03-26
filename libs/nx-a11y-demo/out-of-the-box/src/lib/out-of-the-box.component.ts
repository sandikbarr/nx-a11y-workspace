import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SecondaryNavComponent } from '@a11y/ui-components/nav/vertical-nav';

@Component({
  selector: 'nx-a11y-out-of-the-box',
  standalone: true,
  imports: [CommonModule, OverlayModule, SecondaryNavComponent],
  template: ` <h1>Angular Accessibility Out of The Box</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutOfTheBoxComponent {}
