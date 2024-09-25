import { PropsWithChildren } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@kedoo/adults/ui-components';

import HeaderNavigationLink from './header-navigation-link';

//

type HeaderNavigationProps = PropsWithChildren;

export function HeaderNavigation({ children, ...props }: HeaderNavigationProps) {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList className="uppercase">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">Kedoo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4">
              <li>
                <HeaderNavigationLink href="/production">Production</HeaderNavigationLink>
              </li>
              <li>
                <HeaderNavigationLink href="/distribution">Distribution</HeaderNavigationLink>
              </li>
              <li>
                <HeaderNavigationLink href="/audience">Audience Management</HeaderNavigationLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">Kids</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4">
              <ul className="p-4">
                <li>
                  <HeaderNavigationLink href="/kids/production">Production</HeaderNavigationLink>
                </li>
                <li>
                  <HeaderNavigationLink href="/kids/distribution">
                    Distribution
                  </HeaderNavigationLink>
                </li>
                <li>
                  <HeaderNavigationLink href="/kids/merchandising">
                    Merchandising
                  </HeaderNavigationLink>
                </li>
              </ul>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <li>
          <HeaderNavigationLink href="/news">News</HeaderNavigationLink>
        </li>

        <li>
          <HeaderNavigationLink href="/contacts">Contacts</HeaderNavigationLink>
        </li>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default HeaderNavigation;
