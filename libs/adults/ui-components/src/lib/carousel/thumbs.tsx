import { HTMLAttributes, forwardRef } from 'react';

type ThumbsProps = HTMLAttributes<HTMLDivElement> & {
  items?: { title: string; src: string }[];
};

export const Thumbs = forwardRef<HTMLDivElement, ThumbsProps>(({ items, ...props }, ref) => {
  return (
    <div ref={ref} className="flex gap-4" {...props}>
      {items?.map((item, i) => (
        <div key={i} className="max-w-20 object-contain">
          <img src={item.src} alt={item.title} />
        </div>
      ))}
    </div>
  );
});

export default Thumbs;
