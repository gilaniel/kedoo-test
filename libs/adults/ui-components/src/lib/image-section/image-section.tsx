import { forwardRef } from 'react';

import { cn } from '@kedoo/shared/ui-shadcn';

//

type ImageSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle: string;
  bgImage: string;
};

export const ImageSection = forwardRef<HTMLDivElement, ImageSectionProps>(
  ({ className, title, subtitle, bgImage, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative bg-gray-300 py-20 text-center text-white', className)}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...props}
      >
        <h2 className="text-6xl uppercase py-10">{title}</h2>
        <p className="text-lg">{subtitle}</p>
      </div>
    );
  }
);

export default ImageSection;
