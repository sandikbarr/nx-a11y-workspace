import { screen, render, fireEvent, waitFor } from '@testing-library/angular';
import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { GetByLabelTextComponent } from './get-by-label-text.component';

describe('GetByLabelTextComponent', () => {
  async function setup() {
    const { fixture } = await render(GetByLabelTextComponent);
    const location = TestBed.inject(Location);
    return { component: fixture.componentInstance, location };
  }

  it('renders doc link', async () => {
    const { component, location } = await setup();
    const docLink = screen.getByRole('link', { name: component.name });
    fireEvent.click(docLink);
    waitFor(() => expect(location.path()).toBe(component.href));
  });
});
