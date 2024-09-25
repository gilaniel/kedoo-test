import { getKidsMerchPartners, getKidsProducts, getKidsShops } from '@kedoo/shared/data-access';

import { MerchPage } from '@kedoo/kids/feature-merch';

export const metadata = {
  title: 'Merchandising',
};

const Merchandising = async () => {
  const products = await getKidsProducts();
  const shops = await getKidsShops();
  const partners = await getKidsMerchPartners();

  return <MerchPage products={products} shops={shops} partners={partners} />;
};

export default Merchandising;
