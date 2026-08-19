import { SITE } from '../site.js';
import { TOPICS } from '../data/topics.js';
import { WS_TOPICS } from '../data/wordsearch.js';
import { FC_TOPICS } from '../data/flashcards.js';

export async function GET() {
  const base = SITE.url.replace(/\/$/, '');
  const staticPaths = [
    '/',
    '/bingo/',
    '/word-search/',
    '/flashcards/',
    '/how-to-make-bingo-cards/',
    '/faq/',
    '/about/',
    '/pricing/',
    '/privacy/',
    '/terms/',
  ];
  const bingoPaths = TOPICS.map((t) => `/bingo/${t.slug}/`);
  const wsPaths = WS_TOPICS.map((t) => `/word-search/${t.slug}/`);
  const fcPaths = FC_TOPICS.map((t) => `/flashcards/${t.slug}/`);
  const all = [...staticPaths, ...bingoPaths, ...wsPaths, ...fcPaths];
  const today = new Date().toISOString().slice(0, 10);

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`)
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
