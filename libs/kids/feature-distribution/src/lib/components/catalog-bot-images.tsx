import Image from 'next/image';

const CatalogBotImages = () => {
  return (
    <div className="w-full h-[373px] md:h-[483px] xl:h-[543px] mt-[173px] relative">
      <div className="absolute kids-catalog-bot-line top-0 h-[507px] bg-[--kids-brand-red] z-[3] kids-catalog-bot-line pink"></div>
      <div className="absolute kids-catalog-bot-line h-[553px] bg-[#3bc1fa] z-[2]  kids-catalog-bot-line blue"></div>
      <div className="absolute kids-catalog-bot-line h-[543px] bg-[--kids-brand-yellow] z-[1]  kids-catalog-bot-line yellow"></div>
      <Image
        src="/kids/cup.png"
        alt="Our catalog"
        width={280}
        height={214}
        className="kids-catalog-cup"
      />
      <Image
        src="/kids/catalog-bottom-tri.png"
        alt="Our catalog"
        width={410}
        height={294}
        className="kids-catalog-bot-tri"
      />
      <Image
        src="/kids/catalog-kedoosy.png"
        alt="Our catalog"
        width={399}
        height={356}
        className="kids-catalog-kedoosy"
      />
    </div>
  );
};

export default CatalogBotImages;
