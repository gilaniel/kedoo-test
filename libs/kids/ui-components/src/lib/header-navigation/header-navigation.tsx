import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <div className="gap-[60px] hidden md:flex relative z-[19]">
      <div className="relative kids-menu-group">
        <div className="flex items-center">
          <span className="kids-nav-link mr-2">Kedoo</span>
          <CaretDownIcon />
        </div>

        <div className="kids-menu-dropdown">
          <ul>
            <li>
              <Link href="/production" className="kids-dropdown-link">
                Production
              </Link>
            </li>
            <li>
              <Link href="/distribution" className="kids-dropdown-link">
                Distribution
              </Link>
            </li>
            <li>
              <Link href="/audiece" className="kids-dropdown-link">
                Audience Management
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative kids-menu-group">
        <div className="flex items-center">
          <span className="kids-nav-link mr-2">Kids</span>
          <CaretDownIcon />
        </div>

        <div className="kids-menu-dropdown">
          <ul>
            <li>
              <Link href="/kids/production" className="kids-dropdown-link">
                Production
              </Link>
            </li>
            <li>
              <Link href="/kids/distribution" className="kids-dropdown-link">
                Distribution
              </Link>
            </li>
            <li>
              <Link href="/kids/merchandising" className="kids-dropdown-link">
                Merchandising
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/kids/news" className="kids-nav-link">
        news
      </Link>
      <Link href="/kids/contacts" className="kids-nav-link">
        contacts
      </Link>
    </div>
  );
}

export default HeaderNavigation;
