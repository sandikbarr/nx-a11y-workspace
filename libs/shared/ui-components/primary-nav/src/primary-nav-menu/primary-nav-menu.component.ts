import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItem, isNavItemsGrouped } from '../primary-nav.component';

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
      <ng-container *ngIf="isItemsGrouped(); else singleMenuGroup">
        <ng-container *ngFor="let group of itemsAsGroups; let groupIndex = index">
          <ng-container
            *ngTemplateOutlet="menuGroup; context: { group, groupIndex }"
          ></ng-container>
          <li role="separator" *ngIf="groupIndex < (items?.length || 0) - 1"></li>
        </ng-container>
      </ng-container>

      <ng-template #singleMenuGroup>
        <ng-container
          *ngTemplateOutlet="menuGroup; context: { group: itemsAsSingleGroup }"
        ></ng-container>
      </ng-template>

      <ng-template #menuGroup let-group="group" let-groupIndex="groupIndex">
        <li
          role="none"
          routerLinkActive="active"
          *ngFor="let item of group; let i = index"
        >
          <a
            role="menuitem"
            menu-item
            [routerLink]="item.routerLink"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            (keydown)="controlFocusByKey($event, groupIndex, i)"
            (click)="closeAndFocusMenuButton()"
            >{{ item.label }}</a
          >
        </li>
      </ng-template>
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
        padding: 0;
        white-space: nowrap;
      }
      li:hover,
      li.active {
        background-color: #d0d0d0;
      }
      li[role='separator'] {
        margin: 4px 0;
        border-top: 1px solid #e0e0e0;
      }
      li[role='separator']:hover {
        background-color: transparent;
      }
      a {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
        padding: 8px 16px;
      }
      a.active {
        text-decoration: underline;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryNavMenuComponent {
  @Input() id?: string;
  @Input() expanded?: boolean;
  @Input() items?: NavItem[] | NavItem[][];
  @Output() focusMenuButton = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
  @ViewChildren(MenuItemDirective) menuItems?: QueryList<MenuItemDirective>;

  public focusFirstLink() {
    this.menuItems?.first.focus();
  }

  closeAndFocusMenuButton() {
    this.closeMenu.emit();
    this.focusMenuButton.emit();
  }

  controlFocusByKey(event: KeyboardEvent, groupIndex: number, itemIndex: number) {
    let index = itemIndex;
    if (groupIndex && isNavItemsGrouped(this.items)) {
      index = this.items.slice(0, groupIndex).reduce((acc, group) => acc+=group.length, itemIndex)
    }
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
          console.log({groupIndex, itemIndex, index, nextIndex});
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

  isItemsGrouped(): boolean {
    return isNavItemsGrouped(this.items);
  }

  get itemsAsGroups(): NavItem[][] | undefined {
    if (this.isItemsGrouped()) {
      return this.items as NavItem[][];
    }
    return;
  }

  get itemsAsSingleGroup(): NavItem[] | undefined {
    if (!this.isItemsGrouped()) {
      return this.items as NavItem[];
    }
    return;
  }
}
