import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { fireEvent, screen, render, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { PrimaryNavComponent, NavItem } from './primary-nav.component';

@Component({
  template: '',
})
export class EmptyComponent {}

describe('PrimaryNavComponent', () => {
  const navMenuItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      routerLink: ['/'],
    },
    {
      id: 'tab-one',
      label: 'Tab One',
      items: [
        {
          id: 'tab-one/page-one',
          label: 'One - Page 1',
          routerLink: ['/tab-one', 'page-one'],
        },
        {
          id: 'tab-one/page-two',
          label: 'One - Page 2',
          routerLink: ['/tab-one', 'page-two'],
        },
      ],
    },
    {
      id: 'tab-two',
      label: 'Tab Two',
      routerLink: ['/tab-two'],
    },
    {
      id: 'tab-three',
      label: 'Tab Three',
      items: [
        {
          id: 'tab-three/page-one',
          label: 'Three - Page 1',
          routerLink: ['/tab-three', 'page-one'],
        },
        {
          id: 'tab-three/page-two',
          label: 'Three - Page 2',
          routerLink: ['/tab-three', 'page-two'],
        },
      ],
    },
  ];

  describe('moves focus between primary nav items', () => {
    const setup = async () => {
      // render (with @testing-library/angular)
      await render(PrimaryNavComponent, {
        componentProperties: { navMenuItems },
      });

      const navItems = navMenuItems.map((item) => screen.getByText(item.label));

      return { navItems };
    };

    it('on Arrow Left/Right keys', async () => {
      const { navItems } = await setup();
      navItems[2].focus();

      // expect toHaveFocus (with @testing-library/jest-dom)
      // In your own jest-setup.js:
      // import '@testing-library/jest-dom'
      expect(navItems[2]).toHaveFocus();

      // move left
      await userEvent.keyboard('[ArrowLeft]');
      expect(navItems[1]).toHaveFocus();

      // move back to the right
      await userEvent.keyboard('[ArrowRight]');
      expect(navItems[2]).toHaveFocus();
    });

    it('on Home/End keys', async () => {
      const { navItems } = await setup();
      navItems[1].focus();

      // Home
      await userEvent.keyboard('[Home]');
      expect(navItems[0]).toHaveFocus();

      // End
      await userEvent.keyboard('[End]');
      expect(navItems[navItems.length - 1]).toHaveFocus();
    });

    it('on tab', async () => {
      const { navItems } = await setup();
      navItems[2].focus();

      // tab to the right
      await userEvent.tab();
      expect(navItems[3]).toHaveFocus();

      // shift+tab to the left
      await userEvent.tab({ shift: true });
      expect(navItems[2]).toHaveFocus();
    });
  });

  describe('retains focus on navigation', () => {
    async function setup() {
      await render(PrimaryNavComponent, {
        componentProperties: { navMenuItems },
        imports: [
          RouterTestingModule.withRoutes([
            {
              path: '',
              component: EmptyComponent,
            },
            {
              path: 'tab-one',
              component: EmptyComponent,
              children: [
                {
                  path: 'page-one',
                  component: EmptyComponent,
                },
                {
                  path: 'page-two',
                  component: EmptyComponent,
                },
              ],
            },
            {
              path: 'tab-two',
              component: EmptyComponent,
            },
            {
              path: 'tab-three',
              component: EmptyComponent,
              children: [
                {
                  path: 'page-one',
                  component: EmptyComponent,
                },
                {
                  path: 'page-two',
                  component: EmptyComponent,
                },
              ],
            },
          ]),
        ],
      });

      const location: Location = TestBed.inject(Location);
      location.go('');

      const homeLinkItem = navMenuItems.find(
        (item) => item.routerLink?.[0] === ''
      );
      const links = screen.getAllByRole('link', { name: homeLinkItem?.label });

      const firstNavMenu = navMenuItems.find((item) => item.items);
      const firstNavMenuButton = screen.getByText(firstNavMenu?.label || '');

      return {
        location,
        links,
        firstNavMenuButton,
      };
    }

    it('focus stays on current nav link after navigation', async () => {
      const { links, location } = await setup();

      expect(location.path()).toBe('');
      expect(links.length).toBeGreaterThan(1);

      const currentNavLink = links[links.length - 1];
      currentNavLink.focus();
      await userEvent.keyboard('[Space]');
      waitFor(() => expect(location.path()).toBe('/tab-two'));
      expect(currentNavLink).toHaveFocus();
    });
  });

  describe('navigates to primary nav links', () => {
    async function setup() {
      await render(PrimaryNavComponent, {
        componentProperties: { navMenuItems },
        imports: [
          RouterTestingModule.withRoutes([
            {
              path: '',
              component: EmptyComponent,
            },
            {
              path: 'tab-two',
              component: EmptyComponent,
            },
          ]),
        ],
      });

      const location: Location = TestBed.inject(Location);
      location.go('/tab-two');

      const homeLinkItem = navMenuItems.find(
        (item) => item.routerLink?.[0] === ''
      );
      const links = screen.getAllByRole('link', { name: homeLinkItem?.label });

      return {
        location,
        homeLink: links[0],
      };
    }
    it('on click', async () => {
      const { homeLink, location } = await setup();
      fireEvent.click(homeLink);

      // waitFor (from @testing-library/angular)
      waitFor(() => expect(location.path()).toBe('/'));
    });

    it('on Enter key', async () => {
      const { homeLink, location } = await setup();
      expect(location.path()).toBe('/tab-two');
      homeLink.focus();
      await userEvent.keyboard('[Enter]');
      waitFor(() => expect(location.path()).toBe('/'));
    });

    it('on Space key', async () => {
      const { homeLink, location } = await setup();
      expect(location.path()).toBe('/tab-two');
      homeLink.focus();
      await userEvent.keyboard('[Space]');
      waitFor(() => expect(location.path()).toBe('/'));
    });
  });

  describe('expands menu', () => {
    async function setup() {
      await render(PrimaryNavComponent, {
        componentProperties: { navMenuItems },
        imports: [RouterTestingModule.withRoutes([])],
      });
    }

    it('show/hide menu on button click', async () => {
      await setup();

      const navMenu = navMenuItems.find((item) => item.items);
      const navMenuButton = screen.getByText(navMenu?.label || '');

      expect(navMenuButton).toHaveAttribute('aria-expanded', 'false');

      // click button to expand
      fireEvent.click(navMenuButton);
      expect(navMenuButton).toHaveAttribute('aria-expanded', 'true');

      // click button to collapse
      fireEvent.click(navMenuButton);
      expect(navMenuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('click overlay to collapse', async () => {
      await setup();

      const navMenu = navMenuItems.find((item) => item.items);
      const navMenuButton = screen.getByText(navMenu?.label || '');

      expect(navMenuButton).toHaveAttribute('aria-expanded', 'false');

      // click to expand
      fireEvent.click(navMenuButton);
      expect(navMenuButton).toHaveAttribute('aria-expanded', 'true');

      // click overlay
      fireEvent.click(
        document.getElementsByClassName('cdk-overlay-container')[0]
      );
      expect(navMenuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('when primary nav menu is expanded', () => {
    async function setup() {
      await render(PrimaryNavComponent, {
        componentProperties: { navMenuItems },
        imports: [
          RouterTestingModule.withRoutes([
            {
              path: '',
              component: EmptyComponent,
            },
            {
              path: 'tab-one',
              component: EmptyComponent,
              children: [
                {
                  path: 'page-one',
                  component: EmptyComponent,
                },
                {
                  path: 'page-two',
                  component: EmptyComponent,
                },
              ],
            },
            {
              path: 'tab-two',
              component: EmptyComponent,
            },
            {
              path: 'tab-three',
              component: EmptyComponent,
              children: [
                {
                  path: 'page-one',
                  component: EmptyComponent,
                },
                {
                  path: 'page-two',
                  component: EmptyComponent,
                },
              ],
            },
          ]),
        ],
      });

      const location: Location = TestBed.inject(Location);
      location.go('/');

      const navMenuButtons = screen.getAllByRole('button');
      // click to expand
      fireEvent.click(navMenuButtons[0]);

      const navMenuItem = navMenuItems.find((item) => item.items);
      const firstNavMenuMenuItem = screen.getAllByText(
        (navMenuItem?.items as NavItem[])[0]?.label
      )[0];

      return {
        location,
        navMenuButtons,
        firstNavMenuMenuItem,
      };
    }
    it('moves focus into menu with down arrow key', async () => {
      const { navMenuButtons, firstNavMenuMenuItem } = await setup();

      expect(firstNavMenuMenuItem).toBeVisible();

      // focus on expanded menu
      navMenuButtons[0]?.focus();
      // arrow down
      await userEvent.keyboard('[ArrowDown]');
      expect(firstNavMenuMenuItem).toHaveFocus();
    });

    it('moves focus out of menu with up arrow key', async () => {
      const { navMenuButtons, firstNavMenuMenuItem } = await setup();
      expect(firstNavMenuMenuItem).toBeVisible();

      // focus on expanded menu
      navMenuButtons[0]?.focus();
      // arrow down
      await userEvent.keyboard('[ArrowDown]');
      expect(firstNavMenuMenuItem).toHaveFocus();
      // arrow back up and out of the menu back to the button
      await userEvent.keyboard('[ArrowUp]');
      expect(navMenuButtons[0]).toHaveFocus();
    });

    it('collapses/expands menu on Enter/Space', async () => {
      const { navMenuButtons } = await setup();
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'true');

      // Focus and trigger menu button to collapse
      navMenuButtons[0]?.focus();
      // Enter to collapse
      await userEvent.keyboard('[Enter]');
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'false');

      // Space to expand
      navMenuButtons[0]?.focus();
      await userEvent.keyboard('[Space]');
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses menu if another menu is opened', async () => {
      const { navMenuButtons } = await setup();
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'true');

      // Click another menu button to collapse
      fireEvent.click(navMenuButtons[1]);
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(navMenuButtons[1]).toHaveAttribute('aria-expanded', 'true');
    });

    it('navigates to menu items with Space key', async () => {
      const { location, firstNavMenuMenuItem } = await setup();
      expect(location.path()).toBe('/');
      firstNavMenuMenuItem.focus();
      await userEvent.keyboard('[Space]');
      waitFor(() => expect(location.path()).toBe('/tab-one/page-one'));
    });

    it('navigates to menu items, closes menu, and returns focus to menu button', async () => {
      const { navMenuButtons, location, firstNavMenuMenuItem } = await setup();
      expect(location.path()).toBe('/');
      firstNavMenuMenuItem.focus();
      await userEvent.keyboard('[Enter]');
      waitFor(() => expect(location.path()).toBe('/tab-one/page-one'));
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(navMenuButtons[0]).toHaveFocus();
    });

    it('Escape key closes menu and returns focus to menu button', async () => {
      const { navMenuButtons, firstNavMenuMenuItem } = await setup();
      firstNavMenuMenuItem.focus();
      await userEvent.keyboard('[Escape]');
      expect(navMenuButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(navMenuButtons[0]).toHaveFocus();
    });
  });
});
