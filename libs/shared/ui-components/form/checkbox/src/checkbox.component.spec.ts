import { screen, render } from '@testing-library/angular';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  async function setup({label = 'agree', isChecked}: {label: string, isChecked?: boolean}) {
    await render(CheckboxComponent, {
      componentProperties: {label, isChecked},
    });

    return { };
  }

  it('should create', async () => {
    await setup({label: 'Option 1'});
    const checkbox = screen.getByRole('checkbox',{name: /option 1/i});
    expect(checkbox).toBeInTheDocument();
  });
});
