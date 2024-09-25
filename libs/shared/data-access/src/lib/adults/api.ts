import { notFound } from 'next/navigation';

import { channels } from './channels.data';
import { shows } from './shows.data';
import { persons } from './team.data';

export async function getAllTeamPersons() {
  return Promise.resolve(persons);
}

export async function getAllProductionShows() {
  return Promise.resolve(shows);
}

export async function getAllChannels() {
  return Promise.resolve(channels);
}

export async function getProductionShowById(id: number) {
  const shows = await getAllProductionShows();
  return shows.find((show) => show.id === id) || notFound();
}
