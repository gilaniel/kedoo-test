import { forwardRef } from 'react';

import { cn } from '@kedoo/shared/ui-shadcn';

//

export type HeroSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-10 uppercase', className)} {...props}>
        <h2 className="text-5xl">{title}</h2>
        {subtitle && <p className="text-3xl">{subtitle}</p>}
      </div>
    );
  }
);

export default HeroSection;
