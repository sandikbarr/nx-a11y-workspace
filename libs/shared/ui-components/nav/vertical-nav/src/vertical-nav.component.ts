import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isSingleNavItemsGroup, NavItem } from '../../nav.model';
import {
  ExpansionMenuComponent,
  ExpansionMenuItemComponent,
} from '@a11y/ui-components/expansion-menu';

@Component({
  selector: 'a11y-vertical-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ExpansionMenuComponent,
    ExpansionMenuItemComponent
  ],
  template: `
    <nav [attr.aria-label]="label || 'Subordinate'">
      <div *ngFor="let menu of menus">
        <button
          type="button"
          [attr.aria-expanded]="isMenuExpanded(menu.id)"
          [attr.aria-controls]="menu.id"
          [attr.id]="menu.id + '-button'"
          (click)="toggleMenuExpanded(menu.id)"
        >
          {{ menu.label }}
        </button>
        <a11y-expansion-menu [id]="menu.id" [expanded]="isMenuExpanded(menu.id)">
        <!-- TODO: routerLinkActive, set button routerLink active also -->
          <a a11y-expansion-menu-item *ngFor="let item of singleNavItemsGroup(menu.items)" [routerLink]="item.routerLink">
            {{ item.label }}
          </a>
        </a11y-expansion-menu>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      background-color: #f0f0f0;
      }

    button {
      padding: 0.25rem 0.5rem;
      border-color: transparent;
      background-color: transparent;
      font-size: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryNavComponent {
  @Input() menus?: NavItem[];
  @Input() expandedMenuIds: string[] = [];
  @Input() label!: string;

  toggleMenuExpanded(menuId: string) {
    const isMenuExpandedIndex = this.expandedMenuIds.indexOf(menuId);
    this.expandedMenuIds = isMenuExpandedIndex > -1 ? [...this.expandedMenuIds.slice(0, isMenuExpandedIndex), ...this.expandedMenuIds.slice(isMenuExpandedIndex + 1)] : this.expandedMenuIds?.concat(menuId);
  }

  isMenuExpanded(menuId: string) {
    return this.expandedMenuIds.indexOf(menuId) > -1;
  }

  singleNavItemsGroup(items?: NavItem[] | NavItem[][]): NavItem[] | undefined {
    return isSingleNavItemsGroup(items) ? items : undefined;
  }
}