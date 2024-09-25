import Image from 'next/image';

import { TeamItem } from '@kedoo/shared/utils-interfaces';

import { Hero } from '@kedoo/kids/ui-components';

const Team = ({ data }: { data: TeamItem[] }) => {
  return (
    <section className="mt-[100px] mb-5 md:mb-16 xl:my-[100px] px-5">
      <Hero title="Our Team" subtitle="The International Distribution Unit" />
      <div className="pt-5 flex justify-center items-center gap-[10px] flex-wrap">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-[40px] w-[350px] bg-white p-5 items-center"
          >
            <div className="team-img-container relative">
              <Image src={item.image} alt={item.name} fill sizes="100%" quality={100} />
            </div>
            <p className="text-[32px] leading-[119%] mb-2">{item.name}</p>
            <p className="mb-2 font-sniglet">{item.title}</p>
            <p className="font-sniglet text-[--kids-button-active]">{item.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
