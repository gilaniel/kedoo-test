'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../sheet';

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const menuItems = useMemo(() => {
    return {
      kedoo: [
        {
          name: 'Production',
          link: '/production',
        },
        {
          name: 'Distribution',
          link: '/distribution',
        },
        {
          name: 'Audience Management',
          link: '/audiece',
        },
      ],
      kids: [
        {
          name: 'Production',
          link: '/kids/production',
        },
        {
          name: 'Distribution',
          link: '/kids/distribution',
        },
        {
          name: 'Merchandising',
          link: '/kids/merchandising',
        },
      ],
    };
  }, []);

  return (
    <div className="md:hidden relative z-[19]">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger className="kids-nav-link kids-menu-btn outline-none">Menu</SheetTrigger>
        <SheetContent className="font-sniglet overflow-auto">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="mt-[100px] flex flex-col gap-10">
            <div>
              <p className="kids-sheet-group-title mb-5">Kedoo</p>
              <ul className="kids-sheet-group">
                {menuItems.kedoo.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="kids-sheet-group-title mb-5">Kids</p>
              <ul className="kids-sheet-group">
                {menuItems.kids.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p className="kids-sheet-group-title">
              <Link href="/kids/news" onClick={() => setOpen(false)}>
                News
              </Link>
            </p>
            <p className="kids-sheet-group-title">
              <Link href="/kids/contacts" onClick={() => setOpen(false)}>
                Contacts
              </Link>
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
