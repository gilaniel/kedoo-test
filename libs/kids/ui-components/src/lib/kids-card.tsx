import Image from 'next/image';

import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { Badge } from './badge';
import { Button } from './button';
import { DotSeparate } from './dot-separate';

export const KidsCard = ({
  show,
  onBtnClick,
  prefix = 'shows',
}: {
  show: ShowKidsProfile;
  onBtnClick: (state: boolean, show: ShowKidsProfile) => void;
  prefix?: string;
}) => {
  return (
    <div className="kids-card">
      <div className="relative">
        <Image
          src={`/kids/${prefix}/${show.id}/main.jpg`}
          alt={show.name}
          width={335}
          height={190}
        />
        <Badge text={show.category} className="absolute bottom-5 left-5" />
      </div>
      <div className="kids-card-content">
        <div className="flex flex-col h-[100%]">
          <p className="text-[24px] leading-[142%] mb-5">{show.name}</p>
          <div className="flex items-center gap-2 mb-[10px]">
            <span>{show.run_time}</span>
            <DotSeparate />
            <span>{show.release_date}</span>
          </div>
          <p className="mb-5 flex-grow">{show.description}</p>
          <div>
            <Button onClick={() => onBtnClick(true, show)}>See details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
