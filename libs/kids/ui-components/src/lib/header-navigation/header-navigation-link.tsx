import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@kedoo/kids/ui-components';

//

type HeaderNavigationLinkProps = PropsWithChildren &
  LinkProps & {
    name: string;
  };

export function HeaderNavigationLink({ name, children }: HeaderNavigationLinkProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default HeaderNavigationLink;
