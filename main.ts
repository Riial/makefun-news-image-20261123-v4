// News-image-20261123 v4 (rebuilt) — "The World in One Day",
// Monday 23 November 2026. Layout mirrors the news-22 v2 winner:
// red masthead, giant serif date, black UTC timeline, six-number stats
// strip, text region bar, three photo heroes with red kicker bars,
// a 10-cell photo grid (stories 4-13), map + 22-story ALSO list,
// full-width DATE CHECK, and the HOW WE CHECKED footer.
//
// Node 22, standard library only. The entry image sits beside this
// file as entry.png (1024x1024 PNG, under 1 MiB). The program copies
// it byte-for-byte to $MAKEFUN_OUTPUT_DIR (or /output), after
// validating the PNG signature, the 1 MiB limit, and the 1024x1024
// dimensions from the IHDR chunk. It reads nothing else, makes no
// network calls, and holds no secrets, so repeated runs are identical.

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const HERE = dirname(fileURLToPath(import.meta.url));
const IMAGE = join(HERE, 'entry.png');

// SHA-256 of the final rebuilt entry.png (1024x1024, 674,728 bytes).
const EXPECTED_SHA256 = '7e4b7b0ea3c16e4fc6becb977e87ca31297452a65936113d85efa8edbc6eb56c';

const bytes = readFileSync(IMAGE);

const digest = createHash('sha256').update(bytes).digest('hex');
if (digest !== EXPECTED_SHA256) {
  throw new Error(`entry.png sha256 mismatch: got ${digest}`);
}

const ONE_MIB = 1_048_576;
if (bytes.length > ONE_MIB) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (bytes.subarray(1, 4).toString('ascii') !== 'PNG') {
  throw new Error('entry.png is not a PNG file');
}
const imageWidth = bytes.readUInt32BE(16);
const imageHeight = bytes.readUInt32BE(20);
if (imageWidth !== 1024 || imageHeight !== 1024) {
  throw new Error(`entry.png is ${imageWidth}x${imageHeight}, expected 1024x1024`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.png'), bytes);
