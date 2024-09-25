import Image from 'next/image';

import { Channel } from '@kedoo/shared/utils-interfaces';

import { HeroSection } from '@kedoo/adults/ui-components';

//

type ChannelsSectionProps = {
  channels: Channel[];
};

export function ChannelsSection({ channels }: ChannelsSectionProps) {
  return (
    <section className="py-14">
      <HeroSection
        className="text-center py-10"
        title="Our channels"
        subtitle="The content we curate"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {channels.map((channel) => (
          <Image key={channel.title} src="" alt={channel.title} />
        ))}
      </div>
    </section>
  );
}

export default ChannelsSection;
