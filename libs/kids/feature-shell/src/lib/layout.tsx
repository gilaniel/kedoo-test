import { Footer, Header } from '@kedoo/kids/ui-components';

import './theme.css';

export function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="kids">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default KidsLayout;
