'use client';

import { useState } from 'react';

import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { Hero, KidsCard, ShowModal } from '@kedoo/kids/ui-components';

import CatalogBotImages from './catalog-bot-images';
import CatalogTopImages from './catalog-top-images';
import { DistributionPaths } from './distribution-paths';

const Catalog = ({ shows }: { shows: ShowKidsProfile[] }) => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState<ShowKidsProfile | undefined>(undefined);

  const handleBtnClick = (state: boolean, show: ShowKidsProfile) => {
    setShow(show);
    setOpen(state);
  };

  return (
    <>
      <DistributionPaths />
      <section className="pt-[65px] relative">
        <CatalogTopImages />
        <div className="relative z-[2] pb-14">
          <Hero title="Our Catalogue" subtitle="The Kids’ Content We Distribute" />

          <div className="flex gap-[10px] flex-wrap justify-center items-stretch mt-10">
            {shows.map((show) => (
              <KidsCard key={show.id} show={show} onBtnClick={handleBtnClick} prefix="dis-shows" />
            ))}
          </div>
        </div>
      </section>
      <CatalogBotImages />

      <ShowModal
        isOpen={isOpen}
        onOpenChange={setOpen}
        show={show || ({} as ShowKidsProfile)}
        prefix="dis-shows"
      />
    </>
  );
};

export default Catalog;
