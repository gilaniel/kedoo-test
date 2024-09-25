import { notFound } from 'next/navigation';

import { channels } from './channels.data';
import { shows as disShows } from './dis-hows.data';
import { partners as merchPartners } from './merch-partners.data';
import { products } from './merch-productions.data';
import { partners } from './partners.data';
import { shops } from './shops.data';
import { shows } from './shows.data';
import { studios } from './studios.data';
import { team } from './team.data';

export async function getStudios() {
  return Promise.resolve(studios);
}

export async function getKidsProductionShows() {
  return Promise.resolve(shows);
}

export async function getKidsChannels() {
  return Promise.resolve(channels);
}

export async function getKidsDisShows() {
  return Promise.resolve(disShows);
}

export async function getKidsPartners() {
  return Promise.resolve(partners);
}

export async function getKidsTeam() {
  return Promise.resolve(team);
}

export async function getKidsProducts() {
  return Promise.resolve(products);
}

export async function getKidsShops() {
  return Promise.resolve(shops);
}

export async function getKidsMerchPartners() {
  return Promise.resolve(merchPartners);
}

// export async function getProductionShowById(id: number) {
//   const shows = await getAllProductionShows();
//   return shows.find((show) => show.id === id) || notFound();
// }
