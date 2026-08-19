// Pure word-search generator. Used server-side (seeded → deterministic build
// output) and mirrored client-side for the interactive generator.

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const DIRECTIONS = {
  easy:   [[0, 1], [1, 0]],                                  // right, down
  medium: [[0, 1], [1, 0], [1, 1]],                          // + diagonal down-right
  hard:   [[0, 1], [0, -1], [1, 0], [-1, 0],                 // all 8 incl. reverse
           [1, 1], [1, -1], [-1, 1], [-1, -1]],
};

export function normalizeWords(words, size) {
  const seen = new Set();
  const out = [];
  for (const raw of words) {
    const w = String(raw).toUpperCase().replace(/[^A-Z]/g, '');
    if (w.length < 3 || w.length > size) continue;
    if (seen.has(w)) continue;
    seen.add(w);
    out.push(w);
  }
  // place longest first — easier to fit
  return out.sort((a, b) => b.length - a.length);
}

export function buildPuzzle(words, { size = 13, difficulty = 'medium', rng = Math.random } = {}) {
  const dirs = DIRECTIONS[difficulty] || DIRECTIONS.medium;
  const list = normalizeWords(words, size);
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const placements = [];
  const unplaced = [];

  for (const word of list) {
    let placed = false;
    for (let attempt = 0; attempt < 250 && !placed; attempt++) {
      const [dr, dc] = dirs[Math.floor(rng() * dirs.length)];
      const r0 = Math.floor(rng() * size);
      const c0 = Math.floor(rng() * size);
      const rEnd = r0 + dr * (word.length - 1);
      const cEnd = c0 + dc * (word.length - 1);
      if (rEnd < 0 || rEnd >= size || cEnd < 0 || cEnd >= size) continue;

      let ok = true;
      for (let i = 0; i < word.length; i++) {
        const ch = grid[r0 + dr * i][c0 + dc * i];
        if (ch !== null && ch !== word[i]) { ok = false; break; }
      }
      if (!ok) continue;

      const cells = [];
      for (let i = 0; i < word.length; i++) {
        const r = r0 + dr * i, c = c0 + dc * i;
        grid[r][c] = word[i];
        cells.push({ r, c });
      }
      placements.push({ word, cells });
      placed = true;
    }
    if (!placed) unplaced.push(word);
  }

  // fill blanks
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === null) grid[r][c] = ALPHABET[Math.floor(rng() * 26)];
    }
  }

  return { grid, placements, unplaced, size };
}
