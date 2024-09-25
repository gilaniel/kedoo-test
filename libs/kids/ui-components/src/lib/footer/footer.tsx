import Image from 'next/image';
import Link from 'next/link';

import { ClipPaths } from './clipPaths';
import './footer.css';

export function Footer() {
  return (
    <footer>
      <ClipPaths />
      <div className="relative h-[428px] z-[1]">
        <div className="kids-footer-dark-blue-line"></div>
        <div className="kids-footer-blue-line"></div>
        <Image
          src="/kids/boat.png"
          alt="Boat"
          width={496}
          height={405}
          className="kids-footer-boat"
        />
      </div>
      <div className="kids-footer kids-container relative z-[2]">
        <Image
          src="/kids/fish.png"
          alt="Fish"
          width={315}
          height={223}
          className="absolute w-[141px] h-[100px] left-[20px] bottom-[inherit] top-[-180px] md:top-[inherit] md:left-[40px] md:bottom-[400px] md:w-[315px] md:h-[223px] lg:left-[60px] lg:bottom-[330px]"
          quality={100}
        />
        <div className="flex justify-between flex-col md:flex-row">
          <Link href="/kids">
            <Image
              src="/kids/kids-logo.svg"
              alt="Logo"
              width={92}
              height={77}
              quality={100}
              className="w-[167px] h-[140px] md:w-[92px] md:h-[77px]"
            />
          </Link>

          <div className="flex flex-col">
            <div className="flex gap-10 flex-col md:flex-row mt-10 md:mt-0">
              <div>
                <span className="kids-nav-link active">KEdoo</span>

                <ul className="[&>li]:py-[5px] pt-[15px] pr-3">
                  <li>
                    <Link href="/production">Production</Link>
                  </li>
                  <li>
                    <Link href="/distribution">Distribution</Link>
                  </li>
                  <li>
                    <Link href="/audience">
                      Audience <br /> Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="kids-nav-link active">kids</span>

                <ul className="[&>li]:py-[5px] pt-[15px]">
                  <li>
                    <Link href="/kids/production">Production</Link>
                  </li>
                  <li>
                    <Link href="/kids/distribution">Distribution</Link>
                  </li>
                  <li>
                    <Link href="/kids/merchandising">Merchandising</Link>
                  </li>
                </ul>
              </div>
              <Link href="/kids/news" className="kids-nav-link active">
                News
              </Link>
              <Link href="/kids/contacts" className="kids-nav-link active">
                contacts
              </Link>
            </div>

            <div className="flex mt-10 gap-5 flex-col lg:flex-row lg:gap-10">
              <div className="flex gap-10">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/cookies">Cookies policy</Link>
              </div>
              <span>©2024 Kedoo Entertainment DMCC. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
