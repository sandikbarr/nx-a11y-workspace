import { screen, render } from '@testing-library/angular';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  async function setup({labelText}: {labelText?: string}) {
    // render projected content into component using template
    await render(`<ui-input>${labelText}</ui-input>`, {
      imports: [InputComponent],
    });

    return { };
  }

  it('should get by label text', async () => {
    await setup({labelText: 'Username'});
    const input = screen.getByLabelText(/username/i, {selector: 'input'});
    expect(input).toBeInTheDocument();
  });

  it('should get by role and name', async () => {
    await setup({labelText: 'Username'});
    const input = screen.getByRole('textbox',{name: /username/i});
    expect(input).toBeInTheDocument();
  })
});
