import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from '@a11y/ui-components/form/input';
import { SelectComponent } from '@a11y/ui-components/form/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'a11y-contact-info-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, SelectComponent],
  template: `
    <form (submit)="onSubmit()">
      <p *ngIf="confirmation">{{ confirmation }}</p>
      <ui-input>Name</ui-input>
      <ui-select label="State">
        <option *ngFor="let option of states">{{ option }}</option>
      </ui-select>
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoFormComponent {
  @Output() submitContactInfoForm = new EventEmitter();
  states = ['', 'Idaho', 'Alaska', 'Nebraska'];
  confirmation?: string;

  onSubmit() {
    this.confirmation = 'Thank you';
    this.submitContactInfoForm.emit();
  }
}
