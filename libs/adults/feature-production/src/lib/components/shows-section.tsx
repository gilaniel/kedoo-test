'use client';

import { useState } from 'react';

import { ShowCategory, ShowProfile } from '@kedoo/shared/utils-interfaces';

import {
  Dialog,
  DialogContent,
  HeroSection,
  ShowCard,
  ShowProfileInfo,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@kedoo/adults/ui-components';

//

type ShowsSectionProps = {
  categories: ShowCategory[];
  shows: ShowProfile[];
};

export function ShowsSection({ shows, categories }: ShowsSectionProps) {
  const [tab, setTab] = useState<string>('all');
  const [showId, setShowId] = useState<number | null>(null);

  const selectedShow = shows.find((show) => show.id === showId);

  return (
    <section className="pt-14">
      <div className="flex flex-col gap-5 text-center py-10">
        <HeroSection title="Our Shows" subtitle="The Content we Create" />

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {shows
          .filter((show) => tab === 'all' || show.category.toLowerCase().includes(tab))
          .map((show) => (
            <ShowCard key={show.id} show={show} onDetails={setShowId} />
          ))}
      </div>

      <Dialog open={!!showId} onOpenChange={(open) => !open && setShowId(null)}>
        <DialogContent className="bg-black border-0 text-white max-w-7xl">
          <div className="py-20">{selectedShow && <ShowProfileInfo show={selectedShow} />}</div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default ShowsSection;
