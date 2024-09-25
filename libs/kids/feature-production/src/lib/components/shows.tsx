import Image from 'next/image';

import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { Hero } from '@kedoo/kids/ui-components';

import { ShowsContent } from './shows-content';
import { ShowsTopImages } from './shows-top-images';

export const Shows = ({ data }: { data: ShowKidsProfile[] }) => {
  return (
    <section className="pt-10 lg:pt-[80px] relative">
      <ShowsTopImages />
      <div className="relative z-[12] md:z-[1] px-5 pb-10 md:pb-[100px]">
        <div className="mt-0 md:mt-[100px]">
          <Hero title="Our Shows" subtitle="The Kids’ Content we Create" />
        </div>

        <ShowsContent shows={data} />
      </div>

      <div className="flex justify-start overflow-hidden z-[2] relative h-[324px] mb-[100px]">
        <Image
          src="/kids/show-bottom.png"
          alt="Kedoo"
          quality={100}
          fill
          sizes="100%"
          className="kids-bottom-bg hidden xl:block"
        />
        <Image
          src="/kids/kids-shows-bottom-sm.png"
          alt="Kedoo"
          quality={100}
          fill
          sizes="100%"
          className="kids-bottom-bg hidden md:block xl:hidden"
        />
        <Image
          src="/kids/kids-shows-bottom-xs.png"
          alt="Kedoo"
          quality={100}
          fill
          sizes="100%"
          className="kids-bottom-bg md:hidden"
        />
      </div>
      <Image
        src="/kids/kids-shows-triangles.png"
        alt="Triangles"
        width={281}
        height={208}
        quality={100}
        className="kids-bottom-trianles"
      />
    </section>
  );
};
