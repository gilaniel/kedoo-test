import { forwardRef } from 'react';

import Image from 'next/image';

import { cn } from '@kedoo/shared/ui-shadcn';
import { TeamPerson } from '@kedoo/shared/utils-interfaces';

import EmptyAvatar from './empty-avatar.svg';

//

type TeamCardProps = React.HTMLAttributes<HTMLDivElement> & {
  person: TeamPerson;
};

export const TeamCard = forwardRef<HTMLDivElement, TeamCardProps>(({ className, person }, ref) => {
  return (
    <div ref={ref} className={cn('flex flex-col gap-5 px-4', className)}>
      <Image src={EmptyAvatar} alt={person.name} className="mx-auto w-32" />

      <div className="flex flex-col gap-2 text-center">
        <p className="text-2xl uppercase">{person.name}</p>

        <p className="text-sm">{person.job_title}</p>
        <p className="text-[--kedoo-brand-gold]">{person.contact}</p>
      </div>
    </div>
  );
});

export default TeamCard;
