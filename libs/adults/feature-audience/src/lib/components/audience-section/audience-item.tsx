import Image, { StaticImageData } from 'next/image';

import { cn } from '@kedoo/shared/ui-shadcn';

//

type AudienceItemProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  bgImage: StaticImageData;
  isRight?: boolean;
};

export function AudienceItem({ children, className, title, bgImage, isRight }: AudienceItemProps) {
  const align = isRight ? 'justify-end' : 'justify-start';

  return (
    <section
      className={cn(
        'relative flex flex-col items-end bg-slate-300 min-h-[600px] md:p-5 md:flex-row',
        align,
        className
      )}
    >
      <div className="md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0">
        <Image className="object-cover w-full md:h-full" src={bgImage} alt={title} />
      </div>

      <div className="flex flex-col gap-10 p-10 bg-white z-10 md:max-w-lg">
        <h3 className="text-5xl uppercase">{title}</h3>
        <div className="text-lg">{children}</div>
      </div>
    </section>
  );
}

export default AudienceItem;
