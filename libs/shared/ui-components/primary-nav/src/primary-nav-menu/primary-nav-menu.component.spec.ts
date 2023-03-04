import { screen, render } from '@testing-library/angular';

import { NavItem } from '../primary-nav.component';
import { PrimaryNavMenuComponent } from './primary-nav-menu.component';

describe('PrimaryNavMenuComponent', () => {
  async function setup({id, expanded = true, items}: {id: string, expanded?: boolean, items: NavItem[]}) {
    await render(PrimaryNavMenuComponent, {
      componentProperties: {id, expanded, items},
    });

    return { };
  }

  it('should create', async () => {
    await setup({id: 'menu-1', expanded: false, items: []});
    const menuList = screen.getByRole('list');
    expect(menuList).toBeInTheDocument();
    expect(menuList).toBeVisible();
  });
});
