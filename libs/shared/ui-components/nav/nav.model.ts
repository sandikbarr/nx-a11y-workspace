export interface NavItem {
  id: string;
  label: string;
  routerLink?: string[];
  items?: NavItem[] | NavItem[][];
  // items?: NavItem[];
}

export function isSingleNavItemsGroup(
  items?: NavItem[] | NavItem[][]
): items is NavItem[] {
  return !!items?.length && !Array.isArray(items[0]);
}

export function isMultipleNavItemsGroups(
  items?: NavItem[] | NavItem[][]
): items is NavItem[][] {
  return !!items?.length && Array.isArray(items[0]);
}
