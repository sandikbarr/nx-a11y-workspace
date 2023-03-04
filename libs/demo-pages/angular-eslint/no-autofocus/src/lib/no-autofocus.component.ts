import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <p>no-autofocus works!</p> `,
  styles: [],
})
export class NoAutofocusComponent {}
