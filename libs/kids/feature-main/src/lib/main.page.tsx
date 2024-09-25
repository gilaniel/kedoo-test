import Image from 'next/image';
import Link from 'next/link';

import { MainPaths } from './components/mainPaths';
import './main.css';

export function MainPage() {
  const css = `
    footer {
      display: none;
    }
`;
  return (
    <main className="kids-container fixed top-0 left-0 w-[100vw] h-[100vh] z-[10] bg-[--kids-brand-blue]">
      <MainPaths />

      <section className="relative w-full h-full hidden md:block">
        <div className="kids-main-circle yellow-circle" />
        <div className="kids-main-circle pink-circle" />
        <div className="kids-main-circle blue-circle" />
        <div className="kids-main-circle white-circle" />

        <div className="kids-main-menu">
          <div className="kids-main-tri blue-tri">
            <Link href="/kids/distribution">
              <div className="kids-main-menu-content">
                <span>Distribution</span>
                <Image
                  src="/kids/main-sun.png"
                  alt="Production"
                  width={145}
                  height={145}
                  className="absolute left-[21px] bottom-0"
                />
              </div>
            </Link>
          </div>
          <div className="kids-main-tri yellow-tri">
            <Link href="/kids/merchandising">
              <div className="kids-main-menu-content">
                <span>Merchandising</span>
                <Image
                  src="/kids/planes.png"
                  alt="Production"
                  width={191}
                  height={153}
                  className="absolute left-[65px] bottom-[-41px] rotate-[-15deg]"
                />
              </div>
            </Link>
          </div>
          <div className="kids-main-tri red-tri">
            <Link href="/kids/production">
              <div className="kids-main-menu-content">
                <span>Production</span>
                <Image
                  src="/kids/kedoosy.png"
                  alt="Production"
                  width={194}
                  height={177}
                  className="absolute right-[-7px] bottom-[-17px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <style>{css}</style>
    </main>
  );
}

export default MainPage;
