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
        path: 'no-positive-tabindex',
        component: NoPositiveTabindexComponent,
      },
      {
        path: 'no-distracting-elements',
        component: NoDistractingElementsComponent,
      },
      {
        path: 'no-autofocus',
        component: NoAutofocusComponent,
      },
      {
        path: 'mouse-events-have-key-events',
        component: MouseEventsHaveKeyEventsComponent,
      },
      {
        path: 'click-events-have-key-events',
        component: ClickEventsHaveKeyEventsComponent,
      },
      {
        path: 'button-has-type',
        component: ButtonHasTypeComponent,
      },
      {
        path: 'accessibility-valid-aria',
        component: AccessibilityValidAriaComponent,
      },
      {
        path: 'accessibility-table-scope',
        component: AccessibilityTableScopeComponent,
      },
      {
        path: 'accessibility-role-has-required-aria',
        component: AccessibilityRoleHasRequiredAriaComponent,
      },
      {
        path: 'accessibility-label-has-associated-control',
        component: AccessibilityLabelHasAssociatedControlComponent,
      },
      {
        path: 'accessibility-interactive-supports-focus',
        component: AccessibilityInteractiveSupportsFocusComponent,
      },
      {
        path: 'accessibility-elements-content',
        component: AccessibilityElementsContentComponent,
      },
      {
        path: 'accessibility-alt-text',
        component: AccessibilityAltTextComponent,
      },
    ]),
  ],
})
export class AngularEslintModule {}
