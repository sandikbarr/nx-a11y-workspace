import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavMenuComponent } from './primary-nav-menu/primary-nav-menu.component';
import { RouterModule } from '@angular/router';

export interface NavItem {
  id: string;
  label: string;
  routerLink?: string[];
  items?: NavItem[] | NavItem[][];
}

export function isNavItemsGrouped(
  items?: NavItem[] | NavItem[][]
): items is NavItem[][] {
  return !!items?.length && Array.isArray(items[0]);
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[primary-nav], button[primary-nav]',
  standalone: true,
})
class PrimaryNavButtonLinkDirective {
  constructor(private readonly el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }

  click() {
    this.el.nativeElement.click();
  }
}

@Component({
  selector: 'a11y-primary-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PrimaryNavMenuComponent,
    PrimaryNavButtonLinkDirective,
  ],
  template: `
    <nav [attr.aria-label]="ariaLabel || 'Primary'">
      <ul class="disclosure-nav">
        <li
          *ngFor="let nav of navMenuItems; let i = index"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: !nav.items?.length }"
        >
          <a
            primary-nav
            *ngIf="!nav.items?.length; else menu"
            [routerLink]="nav.routerLink"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            (keydown)="onPrimaryLinkKey($event, i)"
            (click)="onPrimaryLinkClick()"
            >{{ nav.label }}</a
          >

          <ng-template #menu>
            <button
              primary-nav
              type="button"
              [attr.aria-expanded]="isMenuExpanded(i)"
              [attr.aria-haspopup]="'menu'"
              [attr.aria-controls]="nav.id"
              (click)="onMenuButtonClick(i)"
              (keydown)="onMenuButtonKey($event, nav, i)"
            >
              {{ nav.label }}
            </button>
            <!-- hidden active routerLink for routerLinkActive on parent li -->
            <a hidden tabindex="-1" [routerLink]="nav.routerLink">hidden</a>
            <a11y-primary-nav-menu
              [id]="nav.id"
              [expanded]="isMenuExpanded(i)"
              [items]="nav.items"
              (focusMenuButton)="focusMenuButton(i)"
              (closeMenu)="closeMenu(i)"
            ></a11y-primary-nav-menu>
          </ng-template>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
      }
      li {
        padding: 8px 16px;
      }
      li:not(:first-child) {
        border-left: solid black 1px;
      }
      li:hover,
      li.active {
        background-color: #d0d0d0;
      }
      a,
      button {
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: inherit;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      button {
        border: none;
        padding: 0;
        background: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryNavComponent {
  @Input('aria-label') ariaLabel?: string;
  @Input() navMenuItems: NavItem[] = [];
  @ViewChildren(PrimaryNavButtonLinkDirective)
  navButtonLinks?: QueryList<PrimaryNavButtonLinkDirective>;
  @ViewChildren(PrimaryNavMenuComponent)
  navMenus?: QueryList<PrimaryNavMenuComponent>;
  expandedMenuIndex = -1;

  // for menu button, click event on <button> is also executed on keydown Enter and Space
  onMenuButtonClick(index: number) {
    this.setExpandedMenu(this.isMenuExpanded(index) ? -1 : index);
  }

  onMenuButtonKey(event: KeyboardEvent, menu: NavItem, index: number) {
    // close on escape
    if (this.isMenuExpanded(index) && event.key === 'Escape') {
      this.setExpandedMenu(-1);
    }
    // } else if (event.key === 'Enter' || event.key === ' ') {
    // click event on <button> is also executed on keydown Enter and Space
    //   this.setExpandedMenu(this.isMenuExpanded(index) ? -1 : index);

    // move focus into the open menu if the current menu is open
    else if (this.isMenuExpanded(index) && event.key === 'ArrowDown') {
      event.preventDefault();

      // focus first menu item <a>
      this.navMenus
        ?.toArray()
        .find((navMenu) => navMenu.id === menu.id)
        ?.focusFirstLink();
    }

    // handle arrow key navigation between primary menu items
    else {
      this.controlFocusByKey(event, index);
    }
  }

  setExpandedMenu(index: number) {
    this.expandedMenuIndex = index;
  }
  isMenuExpanded(index: number): boolean {
    return this.expandedMenuIndex === index;
  }

  onPrimaryLinkClick() {
    // link navigates, but click event also closes sub menu if open
    this.setExpandedMenu(-1);
  }
  onPrimaryLinkKey(event: KeyboardEvent, index: number) {
    if (event.key === ' ') {
      // add support for Space key to click on <a>
      this.navButtonLinks?.get(index)?.click();
    } else {
      this.controlFocusByKey(event, index);
    }
  }

  /**
   * Moves focus through primary menu items
   * @param event
   * @param index
   */
  controlFocusByKey(event: KeyboardEvent, index: number) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        if (index > -1) {
          const prevIndex = Math.max(0, index - 1);
          this.navButtonLinks?.get(prevIndex)?.focus();
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        if (index > -1 && this.navButtonLinks) {
          const nextIndex = Math.min(this.navButtonLinks.length - 1, index + 1);
          this.navButtonLinks?.get(nextIndex)?.focus();
        }
        break;
      case 'Home':
        event.preventDefault();
        this.navButtonLinks?.get(0)?.focus();
        break;
      case 'End':
        event.preventDefault();
        this.navButtonLinks?.get(this.navButtonLinks?.length - 1)?.focus();
        break;
    }
  }

  /**
   * Focuses menu button by index in menu.
   * Used to move focus up from dropdown menus
   * @param index
   */
  focusMenuButton(index: number) {
    this.navButtonLinks?.get(index)?.focus();
  }

  closeMenu(index: number) {
    if (this.isMenuExpanded(index)) {
      this.setExpandedMenu(-1);
    }
  }

  // TODO: no overlay, should be able to click outside menu to close
}
