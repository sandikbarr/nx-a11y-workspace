import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>no-autofocus works!</h1> `,
  styles: [],
})
export class NoAutofocusComponent {}
