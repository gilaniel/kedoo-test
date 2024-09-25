import Image from 'next/image';

import { Partner } from '@kedoo/shared/utils-interfaces';

import { Hero } from '@kedoo/kids/ui-components';

export const Shops = ({ shops }: { shops: Partner[] }) => {
  return (
    <section className="pb-[70px] md:pb-[100px] xl:pb-[150px]">
      <Hero title="Our Shops" subtitle="The Platforms Where We Sell Our Merch" />
      <div className="flex justify-center pt-5">
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {shops.map((item) => (
            <div className="p-[10px]" key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={100}
                quality={100}
                className="w-[120px] h-[60px] lg:w-[200px] lg:h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
