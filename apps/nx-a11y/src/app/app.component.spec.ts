import { screen, render } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  async function setup() {
    await render(AppComponent, {
      imports: [RouterTestingModule],
    });

    return {};
  }

  it('should create the app', async () => {
    await setup();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
