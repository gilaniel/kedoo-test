import Image from 'next/image';

import { Partner } from '@kedoo/shared/utils-interfaces';

import { Hero } from '@kedoo/kids/ui-components';

import { PartnersPaths } from './partners-paths';

export const Partners = ({ partners }: { partners: Partner[] }) => {
  return (
    <section className="relative pt-[50px] pb-[390px] mb-[50px] md:mb-[180px]">
      <PartnersPaths />

      <div className="relative z-[3]">
        <Hero title="Our partners" subtitle="Other Brands Available In Our Shops" />

        <div className="flex justify-center pt-5">
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {partners.map((item) => (
              <div
                className="p-[10px] w-[120px] h-[60px] md:w-[200px] md:h-[100px] relative"
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="100%"
                  quality={100}
                  className="object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="kids-merch-partners-bg-top"
        style={{ clipPath: 'url(#merchPartnersTop)' }}
      ></div>
      <div
        className="kids-merch-partners-bg-bot"
        style={{ clipPath: 'url(#merchPartnersBot)' }}
      ></div>
      <Image
        src="/kids/wind.png"
        alt="Wind"
        width={680}
        height={298}
        className="kids-merch-partners-wind"
      />
    </section>
  );
};
