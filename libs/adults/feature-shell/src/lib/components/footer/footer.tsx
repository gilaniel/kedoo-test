import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/kedoo-logo.svg';

import MenuTitle from './menu-title';

export function Footer() {
  return (
    <footer className="bg-[--kedoo-black-01] text-[--kedoo-grey-03] py-10">
      <div className="container mx-auto">
        <div className="flex gap-10 flex-col md:flex-row text-sm">
          <div className="flex-grow">
            <Image src={Logo} alt="Kedoo" />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 md:flex-row md:gap-10">
              <div className="flex flex-col gap-5">
                <MenuTitle>Kedoo</MenuTitle>
                <div className="flex flex-col gap-2">
                  <Link href="/production">Production</Link>
                  <Link href="/distribution">Distribution</Link>
                  <Link href="/audience">Audience</Link>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <MenuTitle>Kids</MenuTitle>
                <div className="flex flex-col gap-2">
                  <Link href="/production">Production</Link>
                  <Link href="/distribution">Distribution</Link>
                  <Link href="/kids">Merchandising</Link>
                </div>
              </div>

              <MenuTitle>News</MenuTitle>
              <MenuTitle>Contacts</MenuTitle>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:gap-10">
              <Link href="/kids">Privacy Policy</Link>
              <Link href="/kids">Cookies policy</Link>
              <p>©2024 Kedoo Entertainment DMCC. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
