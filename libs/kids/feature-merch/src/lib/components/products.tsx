import Image from 'next/image';

import { cn } from '@kedoo/shared/ui-shadcn';
import { MerchProduct } from '@kedoo/shared/utils-interfaces';

import { ProductCard } from './product-card';
import { ProductsPaths } from './products-paths';

export const Products = ({ products }: { products: MerchProduct[] }) => {
  return (
    <section className="relative pt-[182px] pb-[80px] 2xl:pb-[100px] mb-[150px]">
      <ProductsPaths />

      <div className="kids-merch-bg" style={{ clipPath: 'url(#productsBg)' }}></div>
      <div className="kids-merch-bot-bg" style={{ clipPath: 'url(#productsBg)' }}></div>
      <div className="relative z-[2] bg-[--kids-text-color-primary] px-5 xl:px-10 pb-[50px] 2xl:pb-[100px]">
        <div className="text-white text-center lg:text-start">
          <h2 className="kids-h2 mb-5">Our Products</h2>
          <h3 className="mb-8 leading-[110%] text-[36px] md:text-[40px]">
            The Best Kids’ Merch in Our Lineup
          </h3>
        </div>

        <div className="kids-merch-product-container grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3 grid-flow-row">
          {products.map((item, i) => (
            <ProductCard
              key={item.id}
              className={cn(i === 0 && 'kids-first-merch row-span-1 lg:row-span-2 2xl:row-span-1')}
              product={item}
            />
          ))}
        </div>
      </div>

      <Image
        src="/kids/sun.png"
        alt="Sun"
        width={313}
        height={397}
        quality={100}
        className="kids-merch-sun"
      />
      <Image
        src="/kids/catalog-top-tri.png"
        alt="Triangles"
        width={414}
        height={308}
        quality={100}
        className="kids-merch-tri"
      />
      <Image
        src="/kids/planes.png"
        alt="Planes"
        width={305}
        height={244}
        quality={100}
        className="kids-merch-planes"
      />
    </section>
  );
};
