import { screen, render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  async function setup() {
    await render(AppComponent, {
      imports: [RouterTestingModule],
    });

    return { };
  }

  it('should create the app', async () => {
    await setup();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
