import { screen, render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { NavItem } from '../../../nav.model';
import { HorizontalNavMenuComponent } from './horizontal-nav-menu.component';

describe('HorizontalNavMenuComponent', () => {
  async function setup({
    id,
    expanded,
    items,
  }: {
    id: string;
    expanded?: boolean;
    items: NavItem[] | NavItem[][];
  }) {
    await render(HorizontalNavMenuComponent, {
      componentProperties: { id, expanded, items },
    });

    return {};
  }

  it('should create', async () => {
    await setup({ id: 'menu-1', expanded: false, items: [] });
    const menuList = screen.getByRole('menu');
    expect(menuList).toBeInTheDocument();
  });

  it('should hide menu', async () => {
    await setup({ id: 'menu-1', expanded: false, items: [] });
    const menuList = screen.getByRole('menu');
    // JSDOM does not render CSS
    // expect(menuList).not.toBeVisible();
    // expect(window.getComputedStyle(menuList).display).toEqual('none');
    expect(menuList).not.toHaveClass('expanded');
  });

  it('should show menu', async () => {
    await setup({ id: 'menu-1', expanded: true, items: [] });
    const menuList = screen.getByRole('menu');
    // JSDOM does not render CSS
    // expect(menuList).toBeVisible();
    // expect(window.getComputedStyle(menuList).display).toEqual('block');
    expect(menuList).toHaveClass('expanded');
  });

  it('traverses over menu items in groups', async () => {
    await setup({
      id: 'menu-1',
      expanded: true,
      items: [
        [
          {
            id: 'group-one/page-one',
            label: 'One - Page 1',
            routerLink: ['/group-one', 'page-one'],
          },
          {
            id: 'group-one/page-two',
            label: 'One - Page 2',
            routerLink: ['/group-one', 'page-two'],
          },
        ],
        [
          {
            id: 'group-two/page-one',
            label: 'Two - Page 1',
            routerLink: ['/group-two', 'page-one'],
          },
          {
            id: 'group-two/page-two',
            label: 'Two - Page 2',
            routerLink: ['/group-two', 'page-two'],
          },
          {
            id: 'group-three/page-three',
            label: 'Two - Page 3',
            routerLink: ['/group-two', 'page-three'],
          },
        ],
        [
          {
            id: 'group-three/page-one',
            label: 'Three - Page 1',
            routerLink: ['/group-three', 'page-one'],
          },
          {
            id: 'group-three/page-two',
            label: 'Three - Page 2',
            routerLink: ['/group-three', 'page-two'],
          },
        ],
      ],
    });

    const links = screen.getAllByRole('menuitem');
    links[0].focus();
    for (const link of links) {
      expect(link).toHaveFocus();
      await userEvent.keyboard('[ArrowDown]');
    }
    expect(links[links.length - 1]).toHaveFocus();

    // stops at the end
    await userEvent.keyboard('[ArrowDown]');
    expect(links[links.length - 1]).toHaveFocus();
  });
});
