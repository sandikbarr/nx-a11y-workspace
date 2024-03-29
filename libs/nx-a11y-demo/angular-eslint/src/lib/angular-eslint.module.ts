import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoPositiveTabindexComponent } from './no-positive-tabindex/no-positive-tabindex.component';
import { NoDistractingElementsComponent } from './no-distracting-elements/no-distracting-elements.component';
import { NoAutofocusComponent } from './no-autofocus/no-autofocus.component';
import { MouseEventsHaveKeyEventsComponent } from './mouse-events-have-key-events/mouse-events-have-key-events.component';
import { ClickEventsHaveKeyEventsComponent } from './click-events-have-key-events/click-events-have-key-events.component';
import { ButtonHasTypeComponent } from './button-has-type/button-has-type.component';
import { AccessibilityValidAriaComponent } from './accessibility-valid-aria/accessibility-valid-aria.component';
import { AccessibilityTableScopeComponent } from './accessibility-table-scope/accessibility-table-scope.component';
import { AccessibilityRoleHasRequiredAriaComponent } from './accessibility-role-has-required-aria/accessibility-role-has-required-aria.component';
import { AccessibilityLabelHasAssociatedControlComponent } from './accessibility-label-has-associated-control/accessibility-label-has-associated-control.component';
import { AccessibilityInteractiveSupportsFocusComponent } from './accessibility-interactive-supports-focus/accessibility-interactive-supports-focus.component';
import { AccessibilityElementsContentComponent } from './accessibility-elements-content/accessibility-elements-content.component';
import { AccessibilityAltTextComponent } from './accessibility-alt-text/accessibility-alt-text.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'keyboard/no-positive-tabindex',
        component: NoPositiveTabindexComponent,
      },
      {
        path: 'keyboard/no-autofocus',
        component: NoAutofocusComponent,
      },
      {
        path: 'keyboard/mouse-events-have-key-events',
        component: MouseEventsHaveKeyEventsComponent,
      },
      {
        path: 'keyboard/click-events-have-key-events',
        component: ClickEventsHaveKeyEventsComponent,
      },
      {
        path: 'keyboard/accessibility-interactive-supports-focus',
        component: AccessibilityInteractiveSupportsFocusComponent,
      },
      {
        path: 'aria/accessibility-valid-aria',
        component: AccessibilityValidAriaComponent,
      },
      {
        path: 'aria/accessibility-role-has-required-aria',
        component: AccessibilityRoleHasRequiredAriaComponent,
      },
      {
        path: 'content/accessibility-alt-text',
        component: AccessibilityAltTextComponent,
      },
      {
        path: 'content/accessibility-elements-content',
        component: AccessibilityElementsContentComponent,
      },
      {
        path: 'content/accessibility-label-has-associated-control',
        component: AccessibilityLabelHasAssociatedControlComponent,
      },
      {
        path: 'content/accessibility-table-scope',
        component: AccessibilityTableScopeComponent,
      },
      {
        path: 'content/no-distracting-elements',
        component: NoDistractingElementsComponent,
      },
      {
        path: 'content/button-has-type',
        component: ButtonHasTypeComponent,
      },
    ]),
  ],
})
export class AngularEslintModule {}
