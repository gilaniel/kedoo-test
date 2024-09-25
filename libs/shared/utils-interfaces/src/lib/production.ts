export type TeamPerson = {
  name: string;
  job_title: string;
  contact: string;
};

export type ShowCategory = {
  id: string;
  title: string;
};

export type Channel = {
  title: string;
};

export type ShowProfile = {
  id: number;
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
  images: string;
  awards: string;
};
