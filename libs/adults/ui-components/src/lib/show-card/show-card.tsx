'use client';

import { ShowProfile } from '@kedoo/shared/utils-interfaces';

import { Button } from '../shadui/button';
import TestImage from '../test-image';

import GenreBadge from './genre-badge';

//

type ShowCardProps = {
  show: ShowProfile;
  onDetails?: (id: number) => void;
};

export function ShowCard({ show, onDetails }: ShowCardProps) {
  return (
    <div className="flex flex-col bg-[--kedoo-grey-01]">
      <div className="relative">
        <TestImage />
        <div className="absolute bottom-5 left-5">
          <GenreBadge>{show.genres}</GenreBadge>
        </div>
      </div>

      <div className="flex flex-col gap-4 h-full p-5">
        <h3 className="uppercase text-xl font-medium">{show.name}</h3>

        <div className="flex gap-4 text-sm">
          <span>{show.run_time}</span>
          <span>{show.release_date}</span>
        </div>

        <p className="text-sm flex-grow">{show.description}</p>

        <div>
          <Button className="uppercase" onClick={() => onDetails?.(show.id)}>
            See details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
