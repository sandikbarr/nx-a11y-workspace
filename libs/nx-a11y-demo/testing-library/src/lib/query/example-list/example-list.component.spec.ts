import { screen, render } from '@testing-library/angular';
import { Example, ExampleListComponent } from './example-list.component';

describe('ExampleListComponent', () => {
  const defaultExamples: Example[] = [];
  async function setup({
    examples = defaultExamples,
  }: {
    examples?: Example[];
  }) {
    await render(ExampleListComponent, { componentProperties: { examples } });
  }

  it('renders examples as encoded HTML', async () => {
    await setup({
      examples: [
        {
          node: `<button>Submit</button>`,
          query: `getByRole('button', { name: /submit/i })`,
        },
      ],
    });
    const tableCells = screen.getAllByRole('cell');
    expect(tableCells[0]).toContainHTML('&lt;button&gt;Submit&lt;/button&gt;');
  });
});
