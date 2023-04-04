import { screen, render } from '@testing-library/angular';
import { InfoSectionComponent } from './info-section.component';

describe('InfoSectionComponent', () => {
  const defaultInfos: string[] = [];
  async function setup({ infos = defaultInfos }: { infos?: string[] }) {
    await render(InfoSectionComponent, { componentProperties: { infos } });
  }

  it('renders provided info as innerHtml, sanitized by Angular', async () => {
    const infos = [
      `<code>alt=""</code>`,
      `Oops <script>alert("danger")</script> <strong>Sorry!</strong>`,
    ];
    await setup({ infos });
    expect(screen.getByText('alt=""')).toBeInTheDocument();
    const sorryNode = screen.getByText('Sorry!');
    expect(sorryNode.parentNode).toHaveTextContent('Oops Sorry!');
    expect(sorryNode.parentNode).toContainHTML('Oops  <strong>Sorry!</strong>');
  });
});
