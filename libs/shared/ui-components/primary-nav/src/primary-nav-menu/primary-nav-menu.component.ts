import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItem } from '../primary-nav.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[menu-item]',
  standalone: true,
})
class MenuItemDirective {
  constructor(private el: ElementRef) {}

  public focus() {
    this.el.nativeElement.focus();
  }

  public click() {
    this.el.nativeElement.click();
  }
}

@Component({
  selector: 'a11y-primary-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuItemDirective],
  template: `
    <ul role="menu" [class.expanded]="expanded">
      <li *ngFor="let item of items; let i = index">
        <a
          role="menuitem"
          menu-item
          [routerLink]="item.routerLink"
          (keydown)="controlFocusByKey($event, i)"
          (click)="closeMenu.emit()"
          >{{ item.label }}</a
        >
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        position: relative;
      }
      ul {
        display: none;
        position: absolute;
        list-style: none;
        padding: 0;
        background-color: #f0f0f0;
      }
      ul.expanded {
        display: block;
      }
      li {
        padding: 8px 16px;
        white-space: nowrap;
      }
      li:hover {
        background-color: #d0d0d0;
      }
      a {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryNavMenuComponent {
  @Input() id?: string;
  @Input() expanded?: boolean;
  @Input() items?: NavItem[];
  @Output() focusMenuButton = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
  @ViewChildren(MenuItemDirective) menuItems?: QueryList<MenuItemDirective>;

  public focusFirstLink() {
    this.menuItems?.first.focus();
  }

  controlFocusByKey(event: KeyboardEvent, index: number) {
    switch (event.key) {
      case ' ':
        // click <a> on Space for consistent UX within menu for <button> and <a>
        this.menuItems?.get(index)?.click();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        if (index > 0) {
          const prevIndex = Math.max(0, index - 1);
          this.menuItems?.get(prevIndex)?.focus();
        } else {
          this.focusMenuButton.emit();
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        if (index > -1 && this.menuItems) {
          const nextIndex = Math.min(this.menuItems.length - 1, index + 1);
          this.menuItems?.get(nextIndex)?.focus();
        }
        break;
      case 'Home':
        event.preventDefault();
        this.focusMenuButton.emit();
        break;
      case 'End':
        event.preventDefault();
        this.menuItems?.get(this.menuItems?.length - 1)?.focus();
        break;
    }
  }

  @HostListener('keydown', ['$event'])
  handleEscapeToClose(event: KeyboardEvent): void {
    if (this.expanded && event.code === 'Escape') {
      this.closeMenu.emit();
      this.focusMenuButton.emit();
    }
  }
}
