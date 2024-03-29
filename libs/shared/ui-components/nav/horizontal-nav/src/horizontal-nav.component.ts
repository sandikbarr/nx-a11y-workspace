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
import { OverlayModule } from '@angular/cdk/overlay';
import { HorizontalNavMenuComponent } from './horizontal-nav-menu/horizontal-nav-menu.component';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../nav.model';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[horizontal-nav], button[horizontal-nav]',
  standalone: true,
})
class HorizontalNavButtonLinkDirective {
  constructor(private readonly el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }

  click() {
    this.el.nativeElement.click();
  }
}

@Component({
  selector: 'ui-horizontal-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    HorizontalNavMenuComponent,
    HorizontalNavButtonLinkDirective,
  ],
  template: `
    <nav [attr.aria-label]="ariaLabel || 'Central'">
      <ul>
        <li
          *ngFor="let nav of navMenuItems; let i = index"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: !nav.items?.length }"
        >
          <a
            horizontal-nav
            *ngIf="!nav.items?.length; else menu"
            [routerLink]="nav.routerLink"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            (keydown)="onNavLinkKey($event, i)"
            (click)="onNavLinkClick()"
            >{{ nav.label }}</a
          >

          <ng-template #menu>
            <button
              horizontal-nav
              type="button"
              [attr.aria-expanded]="isMenuExpanded(i)"
              [attr.aria-haspopup]="'menu'"
              [attr.aria-controls]="nav.id"
              cdkOverlayOrigin
              #trigger="cdkOverlayOrigin"
              (click)="onMenuButtonClick(i)"
              (keydown)="onMenuButtonKey($event, nav, i)"
            >
              {{ nav.label }}
            </button>
            <!-- hidden active routerLink for routerLinkActive on parent li -->
            <a hidden tabindex="-1" [routerLink]="nav.routerLink">hidden</a>
            <ng-template
              cdkConnectedOverlay
              [cdkConnectedOverlayOrigin]="trigger"
              [cdkConnectedOverlayOpen]="isMenuExpanded(i)"
              (overlayOutsideClick)="overlayClicked($event, i)"
            >
              <ui-horizontal-nav-menu
                [id]="nav.id"
                [expanded]="isMenuExpanded(i)"
                [items]="nav.items"
                (focusMenuButton)="focusMenuButton(i)"
                (closeMenu)="closeMenu(i)"
              ></ui-horizontal-nav-menu>
            </ng-template>
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
        align-items: center;
        margin: 0;
        padding: 0;
        border: solid black 1px;
        background-color: #f0f0f0;
      }
      li {
        padding: 0.5rem 1rem;
        line-height: 1.5rem;
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
        font-family: inherit;
        padding: 2px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      button {
        border: none;
        background: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalNavComponent {
  @Input('aria-label') ariaLabel?: string;
  @Input() navMenuItems: NavItem[] = [];
  @ViewChildren(HorizontalNavButtonLinkDirective)
  navButtonLinks?: QueryList<HorizontalNavButtonLinkDirective>;
  @ViewChildren(HorizontalNavMenuComponent)
  navMenus?: QueryList<HorizontalNavMenuComponent>;
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

    // handle arrow key navigation between nav menu items
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

  onNavLinkClick() {
    // link navigates, but click event also closes sub menu if open
    this.setExpandedMenu(-1);
  }
  onNavLinkKey(event: KeyboardEvent, index: number) {
    if (event.key === ' ') {
      // add support for Space key to click on <a>
      this.navButtonLinks?.get(index)?.click();
    } else {
      this.controlFocusByKey(event, index);
    }
  }

  /**
   * Moves focus through nav menu items
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

  overlayClicked(event: Event, index: number) {
    const element = event.target as Element | null;
    // only close the menu if the target was not the trigger button
    // otherwise button click will open it back up
    if (
      !(
        element?.nodeName.toLowerCase() === 'button' &&
        element?.attributes.getNamedItem('aria-haspopup')?.value === 'menu' &&
        element?.attributes.getNamedItem('aria-expanded')?.value === 'true'
      )
    ) {
      this.closeMenu(index);
    }
  }
}
