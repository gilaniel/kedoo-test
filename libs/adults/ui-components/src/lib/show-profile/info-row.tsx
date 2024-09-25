import { PropsWithChildren, ReactNode } from 'react';

type InfoRowProps = PropsWithChildren & {
  title: ReactNode;
};

export function InfoRow({ children, title }: InfoRowProps) {
  return (
    <div className="flex">
      <div>
        <div className="w-48 uppercase text-[--kedoo-grey-03]">{title}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoRow;
