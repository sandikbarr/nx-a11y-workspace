import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavItem } from '@a11y/ui-components/nav';
import { HorizontalNavComponent } from '@a11y/ui-components/nav/horizontal-nav';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SecondaryNavComponent } from '@a11y/ui-components/nav/vertical-nav';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HorizontalNavComponent,
    SecondaryNavComponent,
  ],
  selector: 'a11y-root',
  template: `
    <a11y-horizontal-nav [navMenuItems]="navMenuItems"></a11y-horizontal-nav>
    <div
      class="content"
      *ngIf="angularRoutedVerticalNav$ | async as menu; else main"
    >
      <a11y-vertical-nav
        [menus]="menu.navItems"
        [expandedMenuIds]="menu.expandedMenuIds"
      ></a11y-vertical-nav>
      <ng-container *ngTemplateOutlet="main"></ng-container>
    </div>
    <ng-template #main>
      <main>
        <router-outlet></router-outlet>
      </main>
    </ng-template>
  `,
  styles: [
    `
      .content {
        min-height: calc(100vh - 5.5rem);
        display: grid;
        grid-template-columns: min-content 2fr;
        grid-gap: 0.5rem;
      }
      main {
        margin: 1.5rem;
      }
    `,
  ],
})
export class AppComponent {
  angularEslintNavMenus: NavItem[] = [
    {
      id: 'keyboard-cdk',
      label: 'Keyboard Navigation',
      routerLink: ['/angular-eslint', 'keyboard'],
      items: [
        // Keyboard Navigation
        {
          id: 'angular-eslint/no-positive-tabindex',
          label: 'no-positive-tabindex',
          routerLink: ['/angular-eslint', 'keyboard', 'no-positive-tabindex'],
        },
        {
          id: 'angular-eslint/no-autofocus',
          label: 'no-autofocus',
          routerLink: ['/angular-eslint', 'keyboard', 'no-autofocus'],
        },
        {
          id: 'angular-eslint/mouse-events-have-key-events',
          label: 'mouse-events-have-key-events',
          routerLink: [
            '/angular-eslint',
            'keyboard',
            'mouse-events-have-key-events',
          ],
        },
        {
          id: 'angular-eslint/click-events-have-key-events',
          label: 'click-events-have-key-events',
          routerLink: [
            '/angular-eslint',
            'keyboard',
            'click-events-have-key-events',
          ],
        },
        {
          id: 'angular-eslint/accessibility-interactive-supports-focus',
          label: 'accessibility-interactive-supports-focus',
          routerLink: [
            '/angular-eslint',
            'keyboard',
            'accessibility-interactive-supports-focus',
          ],
        },
      ],
    },
    {
      // ARIA
      id: 'aria',
      label: 'ARIA Roles and Attributes',
      routerLink: ['/angular-eslint', 'aria'],
      items: [
        {
          id: 'angular-eslint/accessibility-valid-aria',
          label: 'accessibility-valid-aria',
          routerLink: ['/angular-eslint', 'aria', 'accessibility-valid-aria'],
        },
        {
          id: 'angular-eslint/accessibility-role-has-required-aria',
          label: 'accessibility-role-has-required-aria',
          routerLink: [
            '/angular-eslint',
            'aria',
            'accessibility-role-has-required-aria',
          ],
        },
      ],
    },
    {
      id: 'content',
      label: 'Content and Relationships',
      routerLink: ['/angular-eslint', 'content'],
      // CONTENT AND RELATIONSHIPS
      items: [
        {
          id: 'angular-eslint/accessibility-alt-text',
          label: 'accessibility-alt-text',
          routerLink: ['/angular-eslint', 'content', 'accessibility-alt-text'],
        },
        {
          id: 'angular-eslint/accessibility-elements-content',
          label: 'accessibility-elements-content',
          routerLink: [
            '/angular-eslint',
            'content',
            'accessibility-elements-content',
          ],
        },
        {
          id: 'angular-eslint/accessibility-label-has-associated-control',
          label: 'accessibility-label-has-associated-control',
          routerLink: [
            '/angular-eslint',
            'content',
            'accessibility-label-has-associated-control',
          ],
        },
        {
          id: 'angular-eslint/accessibility-table-scope',
          label: 'accessibility-table-scope',
          routerLink: [
            '/angular-eslint',
            'content',
            'accessibility-table-scope',
          ],
        },
        {
          id: 'angular-eslint/no-distracting-elements',
          label: 'no-distracting-elements',
          routerLink: ['/angular-eslint', 'content', 'no-distracting-elements'],
        },
        {
          id: 'angular-eslint/button-has-type',
          label: 'button-has-type',
          routerLink: ['/angular-eslint', 'content', 'button-has-type'],
        },
      ],
    },
  ];
  angularRoutedVerticalNav$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event: NavigationEnd) => {
      return event.url.indexOf('angular-eslint') > -1
        ? {
            navItems: this.angularEslintNavMenus,
            expandedMenuIds: this.angularEslintNavMenus.map((nav) => nav.id),
          }
        : undefined;
    }),
    distinctUntilChanged()
  );

  navMenuItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      routerLink: ['/'],
    },
    {
      id: 'out-of-the-box',
      label: 'Angular Built-in Accessibility',
      routerLink: ['/out-of-the-box'],
      items: [
        // Material CDK
        [
          {
            id: 'list-key-manager',
            label: 'ListKeyManager',
            routerLink: ['/out-of-the-box', 'cdk', 'list-key-manager'],
          },
          {
            id: 'focus-trap',
            label: 'FocusTrap',
            routerLink: ['/out-of-the-box', 'cdk', 'focus-trap'],
          },
          {
            id: 'live-announcer',
            label: 'LiveAnnouncer',
            routerLink: ['/out-of-the-box', 'cdk', 'live-announcer'],
          },
        ],
        // Active Links
        [
          {
            id: 'router-link-active',
            label: 'routerLinkActive',
            routerLink: ['/out-of-the-box', 'router-link-active'],
          },
        ],
        // Page TitleStrategy
        [
          {
            id: 'page-title-strategy',
            label: 'Page TitleStrategy',
            routerLink: ['/out-of-the-box', 'page-title-strategy'],
          },
        ],
      ],
    },
    {
      id: 'angular-eslint',
      label: 'Angular ESLint',
      routerLink: ['/angular-eslint'],
    },
    {
      id: 'testing-library',
      label: 'Testing Library',
      routerLink: ['/testing-library'],
      items: [
        // QUERIES
        [
          {
            id: 'testing-library/query/get-by-role',
            label: 'getByRole',
            routerLink: ['/testing-library', 'query', 'get-by-role'],
          },
          {
            id: 'testing-library/query/get-by-label-text',
            label: 'getByLabelText',
            routerLink: ['/testing-library', 'query', 'get-by-label-text'],
          },
          {
            id: 'testing-library/query/get-by-display-value',
            label: 'getByPlaceholderText',
            routerLink: ['/testing-library', 'query', 'get-by-display-value'],
          },
          {
            id: 'testing-library/query/get-by-placeholder-text',
            label: 'getByPlaceholderText',
            routerLink: [
              '/testing-library',
              'query',
              'get-by-placeholder-text',
            ],
          },
          {
            id: 'testing-library/query/get-by-text',
            label: 'getByText',
            routerLink: ['/testing-library', 'query', 'get-by-text'],
          },
          {
            id: 'testing-library/query/get-by-alt-text',
            label: 'getByAltText',
            routerLink: ['/testing-library', 'query', 'get-by-alt-text'],
          },
        ],
        // EVENTS
        [
          {
            id: 'testing-library/events/fire-event',
            label: 'fireEvent',
            routerLink: ['/testing-library', 'events', 'fire-event'],
          },
          {
            id: 'testing-library/events/user-event',
            label: 'userEvent',
            routerLink: ['/testing-library', 'events', 'user-event'],
          },
        ],
      ],
    },
  ];

  constructor(private readonly router: Router) {}
}
