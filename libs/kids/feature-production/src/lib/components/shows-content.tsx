'use client';

import { useState } from 'react';

import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { KidsCard, ShowModal, Tabs, TabsList, TabsTrigger } from '@kedoo/kids/ui-components';

import { SubscribeModal } from './subscribe-modal';

export const ShowsContent = ({ shows }: { shows: ShowKidsProfile[] }) => {
  const [tab, setTab] = useState<string>('all');
  const [isOpen, setOpen] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [show, setShow] = useState<ShowKidsProfile | undefined>(undefined);

  const handleBtnClick = (state: boolean, show: ShowKidsProfile) => {
    setShow(show);
    setOpen(state);
  };

  return (
    <>
      <div>
        <Tabs defaultValue="all" onValueChange={setTab}>
          <TabsList className="grid grid-flow-col auto-cols-max">
            <TabsTrigger value="all">all</TabsTrigger>
            <TabsTrigger value="films">films</TabsTrigger>
            <TabsTrigger value="series">series</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-[10px] flex-wrap justify-center items-stretch mt-10">
          {shows
            .filter((show) => tab === 'all' || show.category.toLowerCase().includes(tab))
            .map((show) => (
              <KidsCard key={show.id} show={show} onBtnClick={handleBtnClick} />
            ))}
        </div>
      </div>

      <ShowModal isOpen={isOpen} onOpenChange={setOpen} show={show || ({} as ShowKidsProfile)} />
      <SubscribeModal isOpen={isSubscribeOpen} onOpenChange={setSubscribeOpen} />
    </>
  );
};
