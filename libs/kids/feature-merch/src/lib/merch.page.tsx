import { MerchProduct, Partner } from '@kedoo/shared/utils-interfaces';

import { MainTitle } from '@kedoo/kids/ui-components';

import { Partners } from './components/partners';
import { Products } from './components/products';
import { Shops } from './components/shops';
import './merch.css';

export function MerchPage({
  products,
  shops,
  partners,
}: {
  products: MerchProduct[];
  shops: Partner[];
  partners: Partner[];
}) {
  return (
    <main>
      <MainTitle
        title="Merchandising"
        subtitle="Turn smiles and giggles into awes and wows. We bring kids’ content to life through merchandise that captivates children everywhere."
      />

      <Products products={products} />
      <Shops shops={shops} />
      <Partners partners={partners} />
    </main>
  );
}

export default MerchPage;
