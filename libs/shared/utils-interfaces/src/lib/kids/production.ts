export type StudioItem = {
  id: number;
  name: string;
  desc: string;
  img: string;
  link: string;
};

export type ShowKidsProfile = {
  id: string;
  name: string;
  description: string;
  episodes: string;
  run_time: string;
  category: string;
  genres: string;
  audience: string;
  languages: string;
  subtitles: string;
  release_date: string;
  highlights_subs: string;
  highlights_others: string;
  director: string;
  writer: string;
  stars: string;
  trailer: Record<string, unknown>;
  imdb: string;
  images: number[];
  awards: string;
};
