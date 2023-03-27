import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isSingleNavItemsGroup, NavItem } from '../../nav.model';
import {
  ExpansionMenuComponent,
  ExpansionMenuItemComponent,
} from '@a11y/ui-components/expansion-menu';

let id = 0;

@Component({
  selector: 'ui-vertical-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ExpansionMenuComponent,
    ExpansionMenuItemComponent,
  ],
  template: `
    <nav
      [attr.aria-label]="ariaLabel || 'Subordinate'"
      [attr.aria-labelledby]="title && id"
    >
      <div *ngIf="title" class="title">
        <a [attr.id]="id" [routerLink]="baseHref">{{ title }}</a>
      </div>
      <div
        *ngFor="let menu of menus"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: false }"
      >
        <button
          type="button"
          [attr.aria-expanded]="isMenuExpanded(menu.id)"
          [attr.aria-controls]="menu.id"
          [attr.id]="menu.id + '-button'"
          (click)="toggleMenuExpanded(menu.id)"
        >
          {{ menu.label }}
        </button>
        <ui-expansion-menu [id]="menu.id" [expanded]="isMenuExpanded(menu.id)">
          <a
            ui-expansion-menu-item
            *ngFor="let item of singleNavItemsGroup(menu.items)"
            [routerLink]="item.routerLink"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            {{ item.label }}
          </a>
        </ui-expansion-menu>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        background-color: #f0f0f0;
        white-space: nowrap;
      }
      div.title {
        margin-top: 1rem;
        padding: 1rem 0.5rem;
      }
      div.title a {
        font-size: 1.2rem;
        text-decoration: bold;
        padding: 2px;
      }

      button {
        padding: 0.25rem 0.5rem;
        border-color: transparent;
        background-color: transparent;
        font-size: 1rem;
      }
      div.active {
        background-color: #d0d0d0;
      }
      div.active > button,
      a.active {
        font-weight: bold;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryNavComponent {
  @Input() menus?: NavItem[];
  @Input() expandedMenuIds: string[] = [];
  @Input() ariaLabel?: string;
  @Input() title?: string;
  @Input() baseHref?: string;
  id = id++;

  toggleMenuExpanded(menuId: string) {
    const isMenuExpandedIndex = this.expandedMenuIds.indexOf(menuId);
    this.expandedMenuIds =
      isMenuExpandedIndex > -1
        ? [
            ...this.expandedMenuIds.slice(0, isMenuExpandedIndex),
            ...this.expandedMenuIds.slice(isMenuExpandedIndex + 1),
          ]
        : this.expandedMenuIds?.concat(menuId);
  }

  isMenuExpanded(menuId: string) {
    return this.expandedMenuIds.indexOf(menuId) > -1;
  }

  singleNavItemsGroup(items?: NavItem[] | NavItem[][]): NavItem[] | undefined {
    return isSingleNavItemsGroup(items) ? items : undefined;
  }
}
