import { PropsWithChildren } from 'react';

type GenreBadgeProps = PropsWithChildren & {};

export function GenreBadge(props: GenreBadgeProps) {
  return (
    <div
      className="bg-white border-1 border-[--kedoo-grey-01] px-4 py-3 text-sm uppercase"
      {...props}
    />
  );
}

export default GenreBadge;
