import { PropsWithChildren } from 'react';

import { Channel, Partner, ShowProfile, TeamPerson } from '@kedoo/shared/utils-interfaces';

import { ImageSection, TeamSection } from '@kedoo/adults/ui-components';

import ChannelsSection from './components/channels-section';
import PartnersSection from './components/partners-section';
import ShowsSection from './components/shows-section';

//

const categories = [
  { id: 'all', title: 'All' },
  { id: 'film', title: 'Film' },
  { id: 'series', title: 'Series' },
];

type DistributionPageProps = PropsWithChildren & {
  shows: ShowProfile[];
  persons: TeamPerson[];
  partners: Partner[];
  channels: Channel[];
};

export function DistributionPage({ shows, persons, partners, channels }: DistributionPageProps) {
  return (
    <>
      <ImageSection
        title="Distribution"
        subtitle="We distribute captivating media and entertainment content to global audiences"
        bgImage="/adults/distribution/banner.png"
      />

      <div className="container mx-auto">
        <ShowsSection categories={categories} shows={shows} />
      </div>

      <div className="container mx-auto">
        <ChannelsSection channels={channels} />
      </div>

      <TeamSection
        title="Our Team"
        subtitle="The International Distribution Unit"
        persons={persons}
      />

      <PartnersSection partners={partners} />
    </>
  );
}

export default DistributionPage;
