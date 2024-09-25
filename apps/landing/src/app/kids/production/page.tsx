import { getKidsProductionShows, getStudios } from '@kedoo/shared/data-access';

import { ProductionPage } from '@kedoo/kids/feature-production';

export const metadata = {
  title: 'Production',
};

export default async function Production() {
  const shows = await getKidsProductionShows();
  const studios = await getStudios();

  return <ProductionPage studios={studios} shows={shows} />;
}
