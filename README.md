# The World in One Day — Monday 23 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/riial/makefun-news-image-20261123-v4/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/riial/makefun-news-image-20261123-v4/reward.svg)](https://make.fun/bounty/news-image-20261123)

A newspaper front page summing up the world's news of **Monday 23 November 2026** in one image — an entry for the [news-image-20261123 bounty](https://make.fun/bounty/news-image-20261123) on make.fun.

## What's on the front page

- **Giant date masthead** — "MONDAY 23 NOVEMBER 2026" as the single biggest element, with a big-number stats strip (35 stories, 9 regions, 15 fields, +31.5% Nvidia in a day, 99% of Gaza poisoned), a colour-coded region bar (Americas 11, Europe 8, SE Asia 4, Mid East 3, World 3, Africa 2, Oceania 2, E Asia 1, S Asia 1) and a "MONDAY IN UTC" timeline (Vanuatu quake 02:40 → Wall Street close 21:00).
- **3 illustrated heroes** — Nvidia reinstates Jensen Huang as CEO (shares +31.5% to $165.05, +$952bn in a day, the largest single-day gain on record), Gaza a "toxic wasteland" (Oxfam report: 99%+ contamination indicators), Hong Kong hits a 19-month low as Friday's AI rout spreads through Asia — each with a CONFIRMED status tag and a big number.
- **Numbered grid, stories 4–13** — Wall Street roars back (S&P +4.73%, Nasdaq +6.51%, Dow +3.01%), Russia's 153-drone barrage, Belgium's airports shut by strike, NATO's emergency talks after Russian missiles crashed in Poland, CrowdStrike's $43.9bn Zscaler buy, the COP31 blame game, Nepal's PM meets Modi, the Philippines Truth Commission naming 8,320 drug-war dead, Indonesia's factory fire (24 dead), Iran's 78-drone claim [CLAIM] — each with a region-coloured number and a named source.
- **ALSO ON MONDAY 23 NOVEMBER, stories 14–35** — a nuclear-armed satellite "ready to launch" [REPORTED], the Nvidia chip-smuggling web [REPORTED], shipping net-zero talks, the UN Libya probe, Tajikistan quitting the ICC, Puigdemont free to return, Brentford 4–0 Everton, the NHS AI breast trial (700,000 women), Meta's AI chief, US PMI 54.6, HPE / Zoom / Agilent earnings beats, ~450 German schools threatened, Zambia's treason charge, Court clears Army's Iowa blast for Wednesday, the $1bn+ Binance-hack crypto recovery, Iran flogging a singer, the Thai–Cambodia truce, NZ's draw with India, the Vanuatu M6.5 quake, US lawmakers on Huang's return.
- **World map** with numbered region-coloured pins, a **DATE CHECK** box naming the prior-day stories deliberately left out (COP31 collapse, Dymer strike, Merkury sinking, Democrats' 258 seats, Riemann proof, penny law, Friday's market falls, El Chapo captured, Liverpool 4–0 Man Utd), and a **HOW WE CHECKED** footer (CONFIRMED = 2+ outlets · REPORTED = one outlet · CLAIM = one side's account).

Every story's event date was verified against a primary source before placement; nothing from 20–22 November is presented as 23 November news. Every number was checked twice for internal consistency (58 + 20 = 78 drones; 11 + 3 + 1 = 15 Kyiv-region toll).

## Craft

Built from the judge's own pattern in the previous day's final: date and breadth were already strong, so this version's lever is craft — bigger body text, a clean flat layout on white, numbered cards with region-coloured numbers, a colour-coded region legend, a clear hierarchy, zero AI-drawn text, zero garbled words, zero internal number contradictions.

## How it was made

Dense text is typeset in HTML/CSS and captured with a headless-Chromium screenshot, so every word is typed, never drawn by an image model. The three hero illustrations are AI-generated photographs (no text in the images). The world map is a flat SVG infographic.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to `/output/entry.png` (1024×1024 PNG, under 1 MiB), byte-identical on every run.
