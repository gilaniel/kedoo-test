import { PropsWithChildren } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/kedoo-logo.svg';

import HeaderNavigation from './header-navigation/header-navigation';

//

type HeaderProps = PropsWithChildren;

export function Header(props: HeaderProps) {
  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-20 items-center">
        <div className="flex-grow">
          <Link href="/">
            <Image src={Logo} alt="Kedoo" />
          </Link>
        </div>

        <HeaderNavigation />
      </div>
    </div>
  );
}

export default Header;
