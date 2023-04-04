import { screen, render, fireEvent } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { ContactInfoFormComponent } from './contact-info-form.component';

describe('ContactInfoFormComponent', () => {
  it('can enter and submit contact info', async () => {
    const submitSpy = jest.fn();
    await render(ContactInfoFormComponent, {
      componentOutputs: { submitContactInfoForm: { emit: submitSpy } as any },
    });

    const nameControl = screen.getByRole('textbox', { name: /name/i });
    const stateControl = screen.getByRole('combobox', { name: /state/i });
    await userEvent.type(nameControl, 'Roger Rabbit');
    await userEvent.selectOptions(stateControl, 'Nebraska');

    expect(nameControl).toHaveValue('Roger Rabbit');
    expect(stateControl).toHaveValue('Nebraska');

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(submitSpy).toHaveBeenCalled();
    expect(screen.getByText('Thank you')).toBeInTheDocument();
  });

  it('shows errors for missing required fields', async () => {
    await render(ContactInfoFormComponent);
  });
});
