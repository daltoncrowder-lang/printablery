// Central configuration. One place to change brand + monetization identifiers.

export const SITE = {
  name: 'Printablery',
  domain: 'printablery.com',
  url: 'https://printablery.com',
  tagline: 'Free printable bingo cards for every occasion',
  // AdSense
  adsensePublisher: 'pub-5419958342829322',
  adsenseClient: 'ca-pub-5419958342829322',
  // Set to true only AFTER AdSense approval + real slot IDs are wired in.
  adsenseApproved: false,
  // Google Search Console meta verification (replace token if it changes).
  googleSiteVerification: '',
};

// Ad slot placeholders. Swap the `slot` values for real AdSense slot IDs
// once the account is approved, then flip SITE.adsenseApproved to true.
export const AD_SLOTS = {
  contentInline: '0000000000',
  contentFooter: '0000000001',
};

export const NAV = [
  { href: '/bingo/', label: 'Bingo' },
  { href: '/word-search/', label: 'Word search' },
  { href: '/flashcards/', label: 'Flashcards' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/about/', label: 'About' },
];
