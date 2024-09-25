'use client';

import React, { useRef } from 'react';

import { wrap } from '@motionone/utils';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import Image from 'next/image';

import { Partner } from '@kedoo/shared/utils-interfaces';

import { Hero } from '@kedoo/kids/ui-components';

const Partners = ({ partners }: { partners: Partner[] }) => {
  const count = partners.length;

  return (
    <section className="pt-[100px] mb-[180px] relative">
      <div className="absolute z-[1] left-0 top-[40px] w-full h-[529px] lg:h-[648px]">
        <div className="kids-partners-bg" />
        <Image
          src="/kids/baloon.png"
          alt="Baloon"
          width={401}
          height={587}
          className="kids-partners-baloon"
        />
      </div>
      <div className="relative z-[2]">
        <Hero title="Our Partners" subtitle="" />
        <p className="kids-partners-subtitle">The Distribution Network We work With</p>
        <div className="pt-5">
          <ParallaxImg baseVelocity={-0.5} partners={partners.slice(0, count / 2)} />
          <ParallaxImg baseVelocity={0.5} partners={partners.slice(count / 2, count)} />
        </div>
      </div>
    </section>
  );
};

const ParallaxImg = ({
  partners,
  baseVelocity = 100,
}: {
  partners: Partner[];
  baseVelocity: number;
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-10, -60, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  const count = partners.length;

  return (
    <div className="kids-parallax">
      <motion.div className="scroller flex items-center justify-center " style={{ x }}>
        {partners.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center relative w-[140px] h-[80px] lg:w-[220px] lg:h-[120px]"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="100%"
              className="object-contain px-5"
              quality={100}
            />
          </div>
        ))}
        {partners.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center relative w-[140px] h-[80px] lg:w-[220px] lg:h-[120px]"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="100%"
              className="object-contain px-5"
              quality={100}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
