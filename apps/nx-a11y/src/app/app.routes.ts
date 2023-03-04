import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'angular-eslint/no-positive-tabindex',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/no-positive-tabindex'
      ).then((m) => m.demoPagesAngularEslintNoPositiveTabindexRoutes),
  },
  {
    path: 'angular-eslint/no-distracting-elements',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/no-distracting-elements'
      ).then((m) => m.demoPagesAngularEslintNoDistractingElementsRoutes),
  },
  {
    path: 'angular-eslint/no-autofocus',
    loadChildren: () =>
      import('@nx-a11y-workspace/demo-pages/angular-eslint/no-autofocus').then(
        (m) => m.demoPagesAngularEslintNoAutofocusRoutes
      ),
  },
  {
    path: 'angular-eslint/mouse-events-have-key-events',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/mouse-events-have-key-events'
      ).then((m) => m.demoPagesAngularEslintMouseEventsHaveKeyEventsRoutes),
  },
  {
    path: 'angular-eslint/click-events-have-key-events',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/click-events-have-key-events'
      ).then((m) => m.demoPagesAngularEslintClickEventsHaveKeyEventsRoutes),
  },
  {
    path: 'angular-eslint/button-has-type',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/button-has-type'
      ).then((m) => m.demoPagesAngularEslintButtonHasTypeRoutes),
  },
  {
    path: 'angular-eslint/accessibility-valid-aria',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-valid-aria'
      ).then((m) => m.demoPagesAngularEslintAccessibilityValidAriaRoutes),
  },
  {
    path: 'angular-eslint/accessibility-table-scope',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-table-scope'
      ).then((m) => m.demoPagesAngularEslintAccessibilityTableScopeRoutes),
  },
  {
    path: 'angular-eslint/accessibility-role-has-required-aria',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-role-has-required-aria'
      ).then(
        (m) => m.demoPagesAngularEslintAccessibilityRoleHasRequiredAriaRoutes
      ),
  },
  {
    path: 'angular-eslint/accessibility-label-has-associated-control',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-label-has-associated-control'
      ).then(
        (m) =>
          m.demoPagesAngularEslintAccessibilityLabelHasAssociatedControlRoutes
      ),
  },
  {
    path: 'angular-eslint/accessibility-interactive-supports-focus',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-interactive-supports-focus'
      ).then(
        (m) =>
          m.demoPagesAngularEslintAccessibilityInteractiveSupportsFocusRoutes
      ),
  },
  {
    path: 'angular-eslint/accessibility-elements-content',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-elements-content'
      ).then((m) => m.demoPagesAngularEslintAccessibilityElementsContentRoutes),
  },
  {
    path: 'angular-eslint/accessibility-alt-text',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/angular-eslint/accessibility-alt-text'
      ).then((m) => m.demoPagesAngularEslintAccessibilityAltTextRoutes),
  },
  {
    path: 'testing-library/events/user-event',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/events/user-event'
      ).then((m) => m.demoPagesTestingLibraryEventsUserEventRoutes),
  },
  {
    path: 'testing-library/events/fire-event',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/events/fire-event'
      ).then((m) => m.demoPagesTestingLibraryEventsFireEventRoutes),
  },
  {
    path: 'testing-library/query/get-by-alt-text',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-alt-text'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByAltTextRoutes),
  },
  {
    path: 'testing-library/query/get-by-text',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-text'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByTextRoutes),
  },
  {
    path: 'testing-library/query/get-by-placeholder-text',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-placeholder-text'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByPlaceholderTextRoutes),
  },
  {
    path: 'testing-library/query/get-by-display-value',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-display-value'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByDisplayValueRoutes),
  },
  {
    path: 'testing-library/query/get-by-role',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-role'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByRoleRoutes),
  },
  {
    path: 'testing-library/query/get-by-label-text',
    loadChildren: () =>
      import(
        '@nx-a11y-workspace/demo-pages/testing-library/query/get-by-label-text'
      ).then((m) => m.demoPagesTestingLibraryQueryGetByLabelTextRoutes),
  },
];
