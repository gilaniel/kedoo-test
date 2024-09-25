import { PropsWithChildren } from 'react';

import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';

import { NavigationMenuLink, navigationMenuTriggerStyle } from '@kedoo/adults/ui-components';

//

type HeaderNavigationLinkProps = PropsWithChildren & LinkProps;

export function HeaderNavigationLink({ children, ...props }: HeaderNavigationLinkProps) {
  return (
    <Link legacyBehavior passHref {...props}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{children}</NavigationMenuLink>
    </Link>
  );
}

export default HeaderNavigationLink;
