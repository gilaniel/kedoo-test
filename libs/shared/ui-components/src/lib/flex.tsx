import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '@kedoo/shared/ui-shadcn';

type FlexProps = HTMLAttributes<HTMLDivElement>;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('flex', className)} {...props} />;
});

export default Flex;
