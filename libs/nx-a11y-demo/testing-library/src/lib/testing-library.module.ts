import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserEventComponent } from './events/user-event/user-event.component';
import { FireEventComponent } from './events/fire-event/fire-event.component';
import { GetByAltTextComponent } from './query/get-by-alt-text/get-by-alt-text.component';
import { GetByTextComponent } from './query/get-by-text/get-by-text.component';
import { GetByPlaceholderTextComponent } from './query/get-by-placeholder-text/get-by-placeholder-text.component';
import { GetByDisplayValueComponent } from './query/get-by-display-value/get-by-display-value.component';
import { GetByRoleComponent } from './query/get-by-role/get-by-role.component';
import { GetByLabelTextComponent } from './query/get-by-label-text/get-by-label-text.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'events/user-event',
        component: UserEventComponent,
      },
      {
        path: 'events/fire-event',
        component: FireEventComponent,
      },
      {
        path: 'query/get-by-alt-text',
        component: GetByAltTextComponent,
      },
      {
        path: 'query/get-by-text',
        component: GetByTextComponent,
      },
      {
        path: 'query/get-by-placeholder-text',
        component: GetByPlaceholderTextComponent,
      },
      {
        path: 'query/get-by-display-value',
        component: GetByDisplayValueComponent,
      },
      {
        path: 'query/get-by-role',
        component: GetByRoleComponent,
      },
      {
        path: 'query/get-by-label-text',
        component: GetByLabelTextComponent,
      },
    ]),
  ],
})
export class TestingLibraryModule {}
