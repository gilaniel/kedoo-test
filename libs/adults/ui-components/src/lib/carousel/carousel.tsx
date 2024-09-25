'use client';

import { HTMLAttributes, forwardRef, useState } from 'react';

import { wrap } from '@motionone/utils';

import Slider from './slider';
import Thumbs from './thumbs';

type CarouselProps = HTMLAttributes<HTMLDivElement> & {
  items?: { title: string; src: string }[];
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ items = [], ...props }, ref) => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const index = wrap(0, items.length, page);

    return (
      <div ref={ref} className="flex flex-col gap-4" {...props}>
        <Slider
          src={items[index].src}
          onChange={(dir: number) => setPage([page + dir, dir])}
          page={page}
          direction={direction}
        />

        <Thumbs items={items} />
      </div>
    );
  }
);

export default Carousel;
