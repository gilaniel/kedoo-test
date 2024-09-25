'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { cn } from '@kedoo/shared/ui-shadcn';
import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { Button } from '../button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../dialog';

import ModalExBg from './kids-modal-ex.jpg';
import { ShowModalTextBlock } from './show-modal-text-block';
import './show-modal.css';

const variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
};

export const ShowModal = ({
  isOpen,
  onOpenChange,
  show,
  prefix = 'shows',
}: {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
  show: ShowKidsProfile;
  prefix?: string;
}) => {
  const [[mainImg, index], setImg] = useState<[StaticImageData | number, number]>([0, 0]);
  const [posterImg, setPosterImg] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);

  const handleImgClick = (img: StaticImageData | number, index: number) => {
    if (img === mainImg) return;

    setLoaded(false);
    setTimeout(() => {
      setImg([img, index]);
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      setImg([show.images[0], 1]);
      setPosterImg(show.images.slice(-1)[0]);
      return;
    }

    setImg([0, 0]);
  }, [isOpen, show]);

  const SlideNextButton = () => {
    if (show.images.length < 5) return;

    return (
      <Button
        className="w-[52px] h-[52px] absolute right-[100px] top-[50%] translate-y-[-50%] z-[2] hidden xl:block"
        onClick={() => firstSwiper?.slideNext()}
      >
        <Image src="/kids/arrow.svg" alt="Slide arrow" width={16} height={14} />
      </Button>
    );
  };

  if (!Object.keys(show).length) return;

  return (
    <Dialog open={isOpen} onOpenChange={() => onOpenChange(false)}>
      <DialogContent
        className="w-full h-full max-w-full py-0 px-0 overflow-auto overflow-x-hidden font-sniglet kids-text-blue [&>button]:top-0 [&>button]:right-0 [&>button]:xl:top-4 [&>button]:xl:right-4"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>

        <div className="absolute left-0 top-0 w-full h-[700px] md:h-[530px] lg:h-[700px] xl:h-[475px] z-0">
          {!!posterImg && (
            <Image
              src={`/kids/${prefix}/${show.id}/gallery/${posterImg}.jpg`}
              alt="Test"
              fill
              sizes="100%"
              className="object-cover object-top blur-[10px] z-0 hidden md:block"
            />
          )}
          <div
            className="h-[730px] md:h-[560px] lg:h-[730px] xl:h-[505px] w-full bg-white z-[2] relative hidden md:block"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, #fff 100%)',
            }}
          />
        </div>

        <div className="relative z-1 px-0 md:px-10 pt-0 md:pt-10 xl:pt-[100px] max-w-[1440px] mx-auto mb-5">
          <div className="flex justify-center md:gap-10 items-center min-h-[470px] md:min-h-[auto]">
            {/*  */}
            <div className="xl:basis-1/2 relative xl:max-w-full">
              {mainImg && (
                <motion.div
                  animate={isLoaded ? 'show' : 'hide'}
                  variants={variants}
                  transition={{ duration: 0.1 }}
                  className="h-[470px] xl:h-auto"
                >
                  <Image
                    src={`/kids/${prefix}/${show.id}/gallery/${mainImg}.jpg`}
                    alt="test"
                    width={1000}
                    height={600}
                    sizes="100%"
                    className="rounded-none md:rounded-[40px] w-full h-full object-contain md:object-cover"
                    onLoad={() =>
                      setTimeout(() => {
                        setLoaded(true);
                      }, 50)
                    }
                  />
                </motion.div>
              )}
            </div>
            <div className="basis-1/2 hidden xl:block">
              <ShowModalTextBlock show={show} />
            </div>
          </div>
        </div>

        <div className="relative px-4 md:px-10">
          <SlideNextButton />
          <div className="relative z-1 max-w-[1440px] mx-auto h-[140px] mb-10 xl:mb-[155px]">
            <div className="absolute left-0 top-0 w-[calc(100vW)]">
              <Swiper
                modules={[Controller]}
                spaceBetween={10}
                slidesPerView="auto"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => setFirstSwiper(swiper)}
                slidesOffsetAfter={600}
                controller={{ control: firstSwiper }}
                breakpoints={{
                  1921: {
                    slidesOffsetAfter: 600,
                  },
                  1720: {
                    slidesOffsetAfter: 300,
                  },
                  1420: {
                    slidesOffsetAfter: 200,
                  },
                  1028: {
                    slidesOffsetAfter: 100,
                  },
                  640: {
                    slidesOffsetAfter: 50,
                  },
                  320: {
                    slidesOffsetAfter: 50,
                  },
                }}
              >
                {show.images.map((item) => (
                  <SwiperSlide key={item}>
                    <Image
                      src={`/kids/${prefix}/${show.id}/gallery/${item}.jpg`}
                      alt="Slide 1"
                      width={500}
                      height={5000}
                      className={cn('kids-modal-slide-img', index === item && 'active')}
                      onClick={() => handleImgClick(item, item)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="xl:hidden px-4 md:px-10 relative z-[1] mb-10 xl:mb-0">
          <ShowModalTextBlock show={show} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
