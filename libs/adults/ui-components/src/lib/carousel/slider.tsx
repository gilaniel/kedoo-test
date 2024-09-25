import { forwardRef } from 'react';

import { AnimatePresence } from 'framer-motion';
import { HTMLMotionProps, motion } from 'framer-motion';

//

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

//

type SliderProps = Omit<HTMLMotionProps<'div'>, 'onChange'> & {
  page: number;
  direction: number;
  src: string;
  onChange: (newDirection: number) => void;
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ page, direction, src, onChange, ...props }, ref) => {
    return (
      <div className="w-full overflow-hidden">
        <div className="relative flex aspect-[16/9] items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              ref={ref}
              key={page}
              // custom={direction}
              // variants={variants}
              // initial="enter"
              // animate="center"
              // exit="exit"
              // transition={{
              //   x: { type: 'spring', stiffness: 300, damping: 30 },
              //   opacity: { duration: 0.2 },
              // }}
              // drag="x"
              // dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              // onDragEnd={(e, { offset, velocity }) => {
              //   const swipe = swipePower(offset.x, velocity.x);

              //   if (swipe < -swipeConfidenceThreshold) {
              //     onChange(1);
              //   } else if (swipe > swipeConfidenceThreshold) {
              //     onChange(-1);
              //   }
              // }}
              className="absolute"
              {...props}
            >
              <img src={src} alt="" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

export default Slider;
