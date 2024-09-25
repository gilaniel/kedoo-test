import Image from 'next/image';

export const ShowsTopImages = () => {
  return (
    <>
      <Image
        src="/kids/baloon.png"
        alt="Baloon"
        width={402}
        height={587}
        className="kids-shows-baloon"
      />
      <Image
        src="/kids/kedoosy.png"
        alt="Kedoosy"
        width={417}
        height={383}
        className="kids-shows-kedoosy"
        quality={100}
      />
      <Image
        src="/kids/kids-shows-top.webp"
        alt="Shows"
        quality={100}
        fill
        sizes="100%"
        className="kids-production-top-bg"
        style={{ left: '50%' }}
      />
    </>
  );
};
