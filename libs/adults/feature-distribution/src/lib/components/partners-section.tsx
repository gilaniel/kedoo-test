import Image from 'next/image';

import { ParallaxRow } from '@kedoo/shared/ui-components';
import { Partner } from '@kedoo/shared/utils-interfaces';

import { HeroSection } from '@kedoo/adults/ui-components';

//

type PartnersSectionProps = {
  partners: Partner[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  const logotypes = partners.map((partner) => (
    <div key={partner.name} className="relative w-[140px] h-[180px] lg:w-[220px] lg:h-[120px]">
      <Image
        src={partner.image}
        alt={partner.name}
        className="object-contain"
        fill
        sizes="100%"
        quality={100}
      />
    </div>
  ));

  return (
    <section className="py-10">
      <HeroSection
        className="text-center py-10"
        title="Our partners"
        subtitle="The Distribution Network We work With"
      />

      <ParallaxRow baseVelocity={0.5}>{logotypes}</ParallaxRow>
      <ParallaxRow baseVelocity={-0.5}>{logotypes}</ParallaxRow>
    </section>
  );
}

export default PartnersSection;
