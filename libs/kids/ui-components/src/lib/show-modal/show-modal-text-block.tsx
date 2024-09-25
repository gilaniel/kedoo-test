import Image from 'next/image';

import { ShowKidsProfile } from '@kedoo/shared/utils-interfaces';

import { Button } from '../button';
import { DotSeparate } from '../dot-separate';

export const ShowModalTextBlock = ({ show }: { show: ShowKidsProfile }) => {
  return (
    <>
      <div className="flex items-start justify-between mb-5 gap-5 flex-col md:flex-row md:items-center">
        <span className="kids-h1">{show.name}</span>
        {!!Object.keys(show.trailer).length && (
          <a
            href={show.trailer.data as string}
            target="_blank"
            className="block w-full md:w-auto md:inline"
            rel="noreferrer"
          >
            <Button className="big w-full">Watch Now</Button>
          </a>
        )}
      </div>

      <div className="flex items-center gap-2 leading-[137%] flex-wrap">
        <span>{show.category}</span>
        <DotSeparate />
        <span>
          {show.episodes} x {show.run_time}
        </span>
        {show.release_date && (
          <>
            <DotSeparate />

            <span>{show.release_date}</span>
          </>
        )}
        {show.imdb && (
          <>
            <DotSeparate />

            <a href={show.imdb} target="_blank" rel="noreferrer">
              <Image src="/kids/imdb-ico.svg" alt="imdb" width={64} height={32} />
            </a>
          </>
        )}
      </div>

      {show.description && <p className="mt-5">{show.description}</p>}

      <div className="[&>.flex]:mb-[10px] mt-5">
        <div className="flex items-center">
          <span className="kids-modal-name">GENRE(S)</span>
          <span>{show.genres || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">AUDIENCE</span>
          <span>{show.audience || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">LANGUAGE(S)</span>
          <span>{show.languages || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">SUBTITLE(S)</span>
          <span>{show.subtitles || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">HIGHLIGHTS (OTHERS)</span>
          <span>{show.highlights_others || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">DIRECTOR</span>
          <span>{show.director || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">WRITER</span>
          <span>{show.writer || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">STARS</span>
          <span>{show.stars || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">AWARDS</span>
          <span>{show.awards || '-'}</span>
        </div>
        <div className="flex items-center">
          <span className="kids-modal-name">HIGHLIGHTS (SUBS)</span>
          <span>{show.highlights_subs || '-'}</span>
        </div>
      </div>
    </>
  );
};
