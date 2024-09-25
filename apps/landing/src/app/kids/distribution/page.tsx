import {
  getKidsChannels,
  getKidsDisShows,
  getKidsPartners,
  getKidsTeam,
} from '@kedoo/shared/data-access';

import { DistributionPage } from '@kedoo/kids/feature-distribution';

export const metadata = {
  title: 'Distribution',
};

const Distribution = async () => {
  const channels = await getKidsChannels();
  const shows = await getKidsDisShows();
  const partners = await getKidsPartners();
  const team = await getKidsTeam();

  return <DistributionPage channels={channels} shows={shows} partners={partners} team={team} />;
};

export default Distribution;
