import Footer from './components/footer/footer';
import Header from './components/header/header';
import './theme.css';

export function AdultsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col" data-theme="adults">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default AdultsLayout;
