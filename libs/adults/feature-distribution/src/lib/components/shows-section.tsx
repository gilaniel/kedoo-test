'use client';

import { useState } from 'react';

import { ShowCategory, ShowProfile } from '@kedoo/shared/utils-interfaces';

import { HeroSection, ShowCard, Tabs, TabsList, TabsTrigger } from '@kedoo/adults/ui-components';

//

type ShowsSectionProps = {
  categories: ShowCategory[];
  shows: ShowProfile[];
};

export function ShowsSection({ shows, categories }: ShowsSectionProps) {
  const [tab, setTab] = useState<string>('all');

  return (
    <section className="pt-14">
      <div className="flex flex-col gap-5 text-center py-10">
        <HeroSection title="Our Catalogue" subtitle="The Content we distribute" />

        <Tabs defaultValue={tab} onValueChange={setTab}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {shows
          .filter((show) => tab === 'all' || show.category.toLowerCase().includes(tab))
          .map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
      </div>
    </section>
  );
}

export default ShowsSection;
