import Image from 'next/image';

import { StudioItem } from '@kedoo/shared/utils-interfaces';

export const StudioCard = ({ studio }: { studio: StudioItem }) => {
  return (
    <a href={studio.link} target="_blank">
      <div className="w-[339px] p-5 rounded-[40px] bg-white lg:w-[460px] lg:p-10">
        <div className="relative w-[299px] aspect-square mb-5 lg:w-[380px] lg:mb-10">
          <Image
            src={`/kids/studios/${studio.img}`}
            alt={studio.name}
            fill
            className="rounded-[20px]"
            sizes="100%"
          />
        </div>
        <p className="text-[40px] leading-[110%] mb-[10px]">{studio.name}</p>
        <p className="text-[24px] leading-[142%] font-sniglet">{studio.desc}</p>
      </div>
    </a>
  );
};
