import { Component, Input } from '@angular/core';
import { screen, render } from '@testing-library/angular';

import { SelectComponent } from './select.component';

@Component({
  standalone: true,
  imports: [SelectComponent],
  template: `
    <ui-select [label]="label">
      <option *ngFor="let option of options">{{ option }}</option>
    </ui-select>
  `,
})
class TestSelectComponent {
  @Input() label?: string;
  @Input() options?: string[];
}

describe('SelectComponent', () => {
  const defaultOptions: string[] = [];
  async function setup({
    labelText,
    options = defaultOptions,
  }: {
    labelText?: string;
    options?: string[];
  }) {
    // render projected content into component using template
    await render(TestSelectComponent, {
      imports: [TestSelectComponent],
      componentProperties: { label: labelText, options },
    });

    return {};
  }

  it('should get by label text', async () => {
    await setup({
      labelText: 'State',
      options: ['Idaho', 'Alaska', 'Nebraska'],
    });
    const input = screen.getByLabelText(/state/i, { selector: 'select' });
    expect(input).toBeInTheDocument();
  });

  it('should get by role and name', async () => {
    await setup({
      labelText: 'State',
      options: ['Idaho', 'Alaska', 'Nebraska'],
    });
    const input = screen.getByRole('combobox', { name: /state/i });
    expect(input).toBeInTheDocument();
  });
});
