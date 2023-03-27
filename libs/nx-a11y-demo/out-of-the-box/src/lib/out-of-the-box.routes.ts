import { Route } from '@angular/router';
import { FocusTrapComponent } from './cdk/focus-trap/focus-trap.component';
import { ListKeyManagerComponent } from './cdk/list-key-manager/list-key-manager.component';
import { LiveAnnouncerComponent } from './cdk/live-announcer/live-announcer.component';
import { OutOfTheBoxComponent } from './out-of-the-box.component';

export const outOfTheBoxRoutes: Route[] = [
  { path: '', component: OutOfTheBoxComponent },
  { path: 'cdk/list-key-manager', component: ListKeyManagerComponent },
  { path: 'cdk/focus-trap', component: FocusTrapComponent },
  { path: 'cdk/live-announcer', component: LiveAnnouncerComponent },
];
