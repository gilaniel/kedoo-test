import { PropsWithChildren } from 'react';

import { ShowProfile, TeamPerson } from '@kedoo/shared/utils-interfaces';

import { ImageSection, TeamSection } from '@kedoo/adults/ui-components';

import ShowsSection from './components/shows-section';

//

const categories = [
  { id: 'all', title: 'All' },
  { id: 'film', title: 'Film' },
  { id: 'series', title: 'Series' },
];

type ProductionPageProps = PropsWithChildren & {
  shows: ShowProfile[];
  persons: TeamPerson[];
};

export function ProductionPage({ shows, persons }: ProductionPageProps) {
  return (
    <>
      <ImageSection
        title="Production"
        subtitle="We produce media and entertainment content that engages audiences worldwide"
        bgImage="/adults/production/banner.png"
      />

      <div className="container mx-auto">
        <ShowsSection categories={categories} shows={shows} />
        <TeamSection title="Our Team" subtitle="The people behind the content" persons={persons} />
      </div>
    </>
  );
}

export default ProductionPage;
