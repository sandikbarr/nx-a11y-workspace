import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'out-of-the-box',
    loadChildren: () =>
      import('@nx-a11y-workspace/nx-a11y-demo/out-of-the-box').then(
        (module) => module.outOfTheBoxRoutes
      ),
  },
  {
    path: 'angular-eslint',
    loadChildren: () =>
      import('@nx-a11y-workspace/nx-a11y-demo/angular-eslint').then(
        (module) => module.AngularEslintModule
      ),
  },
  {
    path: 'testing-library',
    loadChildren: () =>
      import('@nx-a11y-workspace/nx-a11y-demo/testing-library').then(
        (module) => module.TestingLibraryModule
      ),
  },
];
