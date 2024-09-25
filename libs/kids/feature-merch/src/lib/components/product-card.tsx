import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@kedoo/shared/ui-shadcn';
import { MerchProduct } from '@kedoo/shared/utils-interfaces';

import { Button } from '@kedoo/kids/ui-components';

export const ProductCard = ({
  product,
  className,
}: {
  product: MerchProduct;
  className?: string;
}) => {
  return (
    <div className={cn('kids-merch-product-card flex items-end', className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center z-[2] p-5 md:p-10 gap-5 flex-1">
        <div className=" text-[36px] md:text-[40px] leading-[110%]">{product.name}</div>
        <Link href={product.link} target="_blank">
          <Button>{product.btnText}</Button>
        </Link>
      </div>
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="100%"
        quality={100}
        className="object-cover z-0"
      />
    </div>
  );
};
