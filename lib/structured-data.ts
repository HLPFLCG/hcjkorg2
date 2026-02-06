import {
  SITE_URL,
  AUTHOR_NAME,
  BOOK_TITLE,
  INSTAGRAM_URL,
  EMAIL,
  BN_URL,
} from './metadata'

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: [INSTAGRAM_URL],
    email: EMAIL,
    jobTitle: 'Poet & Author',
    description:
      'Poet and author of I See You, I See Me — exploring love, loss, self-discovery, and the quiet courage of being truly seen.',
  }
}

export function getBookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: BOOK_TITLE,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
    bookFormat: 'https://schema.org/Paperback',
    genre: ['Poetry', 'Mental Health', 'Self-Discovery'],
    url: `${SITE_URL}/shop/`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: BN_URL,
    },
    description:
      'A poetry collection about the act of truly seeing — others, ourselves, and the quiet revelations that emerge when we let ourselves be known. Raw, emotional poetry about love, loss, healing, and mental health.',
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heather Krystecki — Poet & Author',
    url: SITE_URL,
    description:
      'Official website of poet Heather Krystecki, author of I See You, I See Me. Raw, emotional poetry about love, loss, self-discovery, and mental health.',
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
  }
}
