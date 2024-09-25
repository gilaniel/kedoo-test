import Image from 'next/image';
import Link from 'next/link';

import HeaderNavigation from '../header-navigation/header-navigation';

import { Sidebar } from './sidebar';

export function Header() {
  return (
    <div className="kids-container py-5 md:py-3">
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="relative z-20">
            <Link href="/kids">
              <Image
                src="/kids/kids-logo.png"
                alt="Logo"
                width={92}
                height={77}
                className="kids-logo"
              />
            </Link>
          </div>
          <div className="absolute left-[-86px] top-[-19px] md:left-[-118px] md:top-[-47px] w-[230px]  md:w-[311px] z-[19]">
            <Image src="/kids/logo-cloud.png" alt="Cloud" width={311} height={133} />
          </div>
        </div>

        <HeaderNavigation />

        <Sidebar />
      </div>
    </div>
  );
}

export default Header;
