import { ShowProfile } from '@kedoo/shared/utils-interfaces';

import Carousel from '../carousel/carousel';
import Thumbs from '../carousel/thumbs';
import { Button } from '../shadui/button';

import InfoRow from './info-row';

//

const items = [
  {
    title: '123',
    src: 'https://freshtunes.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.468e8c73.jpg&w=2048&q=75',
  },
  {
    title: '456',
    src: 'https://freshtunes.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.468e8c73.jpg&w=2048&q=75',
  },
];

//

type ShowProfileInfoProps = {
  show: ShowProfile;
};

export function ShowProfileInfo({ show }: ShowProfileInfoProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://freshtunes.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.468e8c73.jpg&w=2048&q=75"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-6xl uppercase">{show.name}</h3>

          <div className="flex gap-2">
            <Button>Watch trailer</Button>
            <Button>Watch now</Button>
            <Button>Request Screener</Button>
          </div>

          <div className="flex items-center gap-4">
            <div>{show.category}</div>
            <div>{show.run_time}</div>
            <div>{show.release_date}</div>
            <div>imbd</div>
          </div>

          <p>{show.description}</p>

          <div className="flex flex-col gap-3">
            <InfoRow title="Genre(s)">Crime, Drama, Thriller</InfoRow>
            <InfoRow title="Audience">All Gender, 18-34 Years Old</InfoRow>
            <InfoRow title="Language(s)">Russian</InfoRow>
            <InfoRow title="Subtitle(s)">English</InfoRow>
            <InfoRow title="Director">Dias Bertis</InfoRow>
            <InfoRow title="Writer">Dias Bertis, Alen Rakhemtaliyev</InfoRow>
            <InfoRow title="Stars">Rauan Akhmedov, Damir Amangeldin, Aibar Saly</InfoRow>
            <InfoRow title="Highlights">
              From the Creators of hit series & BIFF Best Asian TV Series nominee "A Dark Yard"
            </InfoRow>
          </div>
        </div>
      </div>

      <Thumbs items={items} />
    </div>
  );
}
