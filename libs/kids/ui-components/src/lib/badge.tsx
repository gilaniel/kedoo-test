import { cn } from '@kedoo/shared/ui-shadcn';

export const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={cn(
        'border-[1px] border-[--kedoo-opacity-blue-10] rounded-[20px] bg-white uppercase text-[24px] leading-[125%] text-[--kids-text-color-primary] p-[10px]',
        className
      )}
    >
      {text}
    </div>
  );
};
