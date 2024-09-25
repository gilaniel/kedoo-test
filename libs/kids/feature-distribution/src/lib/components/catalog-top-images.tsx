import Image from 'next/image';

const CatalogTopImages = () => {
  return (
    <div className="absolute left-0 top-[-33px] z-[1] w-full h-[850px]">
      <div className="kids-catalog-bg" style={{ clipPath: 'url(#catalogTopBg)' }}></div>
      <Image
        src="/kids/sun.png"
        alt="Sun"
        width={313}
        height={397}
        quality={100}
        className="kids-catalog-sun"
      />
      <Image
        src="/kids/catalog-top-tri.png"
        alt="Triangles"
        width={414}
        height={308}
        quality={100}
        className="kids-catalog-tri"
      />
    </div>
  );
};

export default CatalogTopImages;
