import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  ExpansionMenuComponent,
  ExpansionMenuItemComponent,
} from '@a11y/ui-components/expansion-menu';

@Component({
  selector: 'a11y-popup-menu-container',
  standalone: true,
  imports: [
    CommonModule,
    A11yModule,
    OverlayModule,
    ExpansionMenuComponent,
    ExpansionMenuItemComponent
  ],
  template: `
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="menuButton"
      [cdkConnectedOverlayOpen]="isMenuOpen"
      (overlayOutsideClick)="closeMenu.emit()"
    >
      <div class="menu-container" [class.expanded]="isMenuOpen" cdkTrapFocus cdkTrapFocusAutoCapture>
        <div class="close-button-container">
          <button type="button" class="close" aria-label="Close" (click)="closeMenu.emit()">X</button>
        </div>
        <div cdkFocusRegionInitial>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    :host {
      position: relative;
    }
    .menu-container {
      position: absolute;
      visibility: hidden;
      background: white;
      border: 1px solid #d0d0d0;
      box-shadow: 1px 1px 2px #d0d0d0;
      padding-left: 0.5rem;
      padding-right: 1.5rem;
      padding-bottom: 0.5rem;
    }
    .menu-container.expanded {
      visibility: visible;
    }
    .close-button-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.25rem;
      margin-right: -1.25rem;
    }
    button.close {
      padding: 0;
      border: 0;
      background-color: transparent;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupMenuContainerComponent {
  @Input() menuId!: string;
  @Input() isMenuOpen = false;
  @Input() menuButton!: ElementRef;
  @Output() closeMenu = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event'])
  closeOnEsc() {
    this.closeMenu.emit();
  }
}