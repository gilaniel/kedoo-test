import { StudioItem } from '@kedoo/shared/utils-interfaces';

import { Hero, StudioCard } from '@kedoo/kids/ui-components';

export const Studios = ({ data }: { data: StudioItem[] }) => {
  return (
    <div className="px-5 mb-[30px] md:mb-[140px]">
      <Hero title="Our Studios" subtitle="The Teams Behind The Content" />

      <div className="flex justify-center py-5">
        <div className="flex gap-[10px] flex-wrap kids-studios-cards">
          {data.map((item) => (
            <StudioCard key={item.id} studio={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
