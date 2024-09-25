import { PropsWithChildren } from 'react';

export function MenuTitle(props: PropsWithChildren) {
  return <p className="uppercase text-white" {...props} />;
}

export default MenuTitle;
