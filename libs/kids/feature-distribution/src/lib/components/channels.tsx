'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { KidsChannel } from '@kedoo/shared/utils-interfaces';

import { Badge, Button, Hero } from '@kedoo/kids/ui-components';

const Channels = ({ data }: { data: KidsChannel[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const [channel, setChannel] = useState<KidsChannel>(data[0]);

  const setSwiperWidth = () => {
    if (!containerRef.current || !swiperContainerRef.current) return;

    const width = (window.innerWidth - containerRef.current.clientWidth) / 2;

    swiperContainerRef.current.style.width = `calc(100vW - ${width - 5}px)`;
  };

  useEffect(() => {
    setSwiperWidth();

    window.addEventListener('resize', setSwiperWidth);

    return () => {
      window.removeEventListener('resize', setSwiperWidth);
    };
  }, []);

  return (
    <section>
      <Hero title="Our Channels" subtitle="The Kids’ Content We Curate" />

      <div className="mx-auto max-w-[1160px]" ref={containerRef}>
        <div className="kids-channel-video relative">
          <video
            src={channel.video}
            autoPlay
            muted
            loop
            className="w-full h-full absolute z-[1] top-0 left-0 object-cover"
          />
          <div className="flex justify-between flex-col absolute z-[3] bottom-0 left-0 items-start w-full p-5 gap-[10px] md:flex-row md:items-end md:p-10">
            <div>
              <p className="kids-h2 mb-[10px]">{channel.name}</p>
              <p className="font-sniglet text-[24px] leading-[142%]">{channel.description}</p>
            </div>
            <div>
              <Button className="big">Go to channel</Button>
            </div>
          </div>
        </div>

        <div ref={swiperContainerRef} className="ml-[-5px]">
          <Swiper
            slidesPerView="auto"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="kids-channels-swiper"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                {item.isReady ? (
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={425}
                    height={240}
                    className="kids-channel-item cursor-pointer"
                    onClick={() => setChannel(item)}
                  />
                ) : (
                  <div className="kids-channel-item empty">
                    <div className="relative flex items-center justify-center">
                      <Badge
                        text="soon"
                        className="absolute top-[-1px] left-[-1px] bg-[--kids-button-hover] text-white"
                      />
                      <span className="text-[32px] leading-[119%] px-5">{item.name}</span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Channels;
