import { KidsChannel, Partner, ShowKidsProfile, TeamItem } from '@kedoo/shared/utils-interfaces';

import { MainTitle } from '@kedoo/kids/ui-components';

import Catalog from './components/catalog';
import Channels from './components/channels';
import Partners from './components/partners';
import Team from './components/team';
import './distribution.css';

export function DistributionPage({
  channels,
  shows,
  partners,
  team,
}: {
  channels: KidsChannel[];
  shows: ShowKidsProfile[];
  partners: Partner[];
  team: TeamItem[];
}) {
  return (
    <main>
      <MainTitle
        title="Distribution"
        subtitle={
          "Spread the smiles and giggles! We distribute educational and entertaining kids' content to children across the globe."
        }
      />

      <Catalog shows={shows} />
      <Channels data={channels} />
      <Team data={team} />
      <Partners partners={partners} />
    </main>
  );
}

export default DistributionPage;
