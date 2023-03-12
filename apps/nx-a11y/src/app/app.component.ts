import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavItem, PrimaryNavComponent } from '@a11y/ui-components/primary-nav';

@Component({
  standalone: true,
  imports: [RouterModule, PrimaryNavComponent],
  selector: 'a11y-root',
  template: `
    <a11y-primary-nav [navMenuItems]="navMenuItems"></a11y-primary-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  navMenuItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      routerLink: ['/'],
    },
    {
      id: 'angular-eslint',
      label: 'Angular ESLint',
      items: [
        {
          id: 'angular-eslint/accessibility-alt-text',
          label: 'accessibility-alt-text',
          routerLink: ['/angular-eslint', 'accessibility-alt-text'],
        },
        {
          id: 'angular-eslint/accessibility-elements-content',
          label: 'accessibility-elements-content',
          routerLink: ['/angular-eslint', 'accessibility-elements-content'],
        },
        {
          id: 'angular-eslint/accessibility-interactive-supports-focus',
          label: 'accessibility-interactive-supports-focus',
          routerLink: [
            '/angular-eslint',
            'accessibility-interactive-supports-focus',
          ],
        },
        {
          id: 'angular-eslint/accessibility-label-has-associated-control',
          label: 'accessibility-label-has-associated-control',
          routerLink: [
            '/angular-eslint',
            'accessibility-label-has-associated-control',
          ],
        },
        {
          id: 'angular-eslint/accessibility-role-has-required-aria',
          label: 'accessibility-role-has-required-aria',
          routerLink: [
            '/angular-eslint',
            'accessibility-role-has-required-aria',
          ],
        },
        {
          id: 'angular-eslint/accessibility-table-scope',
          label: 'accessibility-table-scope',
          routerLink: ['/angular-eslint', 'accessibility-table-scope'],
        },
        {
          id: 'angular-eslint/accessibility-valid-aria',
          label: 'accessibility-valid-aria',
          routerLink: ['/angular-eslint', 'accessibility-valid-aria'],
        },
        {
          id: 'angular-eslint/button-has-type',
          label: 'button-has-type',
          routerLink: ['/angular-eslint', 'button-has-type'],
        },
        {
          id: 'angular-eslint/click-events-have-key-events',
          label: 'click-events-have-key-events',
          routerLink: ['/angular-eslint', 'click-events-have-key-events'],
        },
        {
          id: 'angular-eslint/mouse-events-have-key-events',
          label: 'mouse-events-have-key-events',
          routerLink: ['/angular-eslint', 'mouse-events-have-key-events'],
        },
        {
          id: 'angular-eslint/no-autofocus',
          label: 'no-autofocus',
          routerLink: ['/angular-eslint', 'no-autofocus'],
        },
        {
          id: 'angular-eslint/no-distracting-elements',
          label: 'no-distracting-elements',
          routerLink: ['/angular-eslint', 'no-distracting-elements'],
        },
        {
          id: 'angular-eslint/no-positive-tabindex',
          label: 'no-positive-tabindex',
          routerLink: ['/angular-eslint', 'no-positive-tabindex'],
        },
      ],
    },
    {
      id: 'testing-library',
      label: 'Testing Library',
      items: [
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
          routerLink: ['/testing-library', 'query', 'get-by-placeholder-text'],
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
    },
  ];
}
