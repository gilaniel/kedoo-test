import { ShowKidsProfile, StudioItem } from '@kedoo/shared/utils-interfaces';

import { MainTitle } from '@kedoo/kids/ui-components';

import { Shows } from './components/shows';
import { Studios } from './components/studios';
import './production.css';

export function ProductionPage({
  studios,
  shows,
}: {
  studios: StudioItem[];
  shows: ShowKidsProfile[];
}) {
  return (
    <main>
      <MainTitle
        title="Production"
        subtitle={
          "Watch, smile and giggle! We produce engaging kids' content that educates and entertains."
        }
      />
      <Shows data={shows} />
      <Studios data={studios} />
    </main>
  );
}

export default ProductionPage;
