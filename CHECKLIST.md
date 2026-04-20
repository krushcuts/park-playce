# QUARTER DRAIN — BUILD CHECKLIST
### park-playce / krushcuts

Everything we can return to, grouped by category.
Check things off as they get built.
★ = high priority next session | ◆ = design decision needed first

---

## CODE MIGRATION & STRUCTURE
*Do this before building anything new*
- [ ] ★ Create index.html shell (loads all JS/CSS via script tags)
- [ ] ★ Extract iso.js — projection math, iso() function
- [ ] ★ Extract state.js — single source of truth for all game state
- [ ] ★ Extract input.js — keyboard handling, keys object
- [ ] ★ Extract main.js — game loop, screen router, init
- [ ] ★ Extract screens/garage.js — floor draw, wall draw, furniture
- [ ] ★ Extract entities/owner.js — player character movement + draw
- [ ] ★ Extract entities/patron.js — patron AI, queue system, draw
- [ ] ★ Extract entities/cabinet.js — cabinet draw + coin tray state
- [ ] ★ Extract css/main.css — all styles out of HTML
- [ ] Create data/machines.js — machine type definitions, name pools
- [ ] Create data/locations.js — location definitions, rent, capacity
- [ ] Create data/upgrades.js — all upgrade definitions
- [ ] Create data/achievements.js — achievement definitions
- [ ] Verify game still runs identically after migration

---

## INTRO SEQUENCE
- [ ] ★ Name entry screen (already built — migrate to screens/nameEntry.js)
- [ ] ★ Classified ad screen — first run, single listing (screens/classifiedAd.js)
- [ ] ★ Random machine draw on ad load (genre/mechanic/players from starting pool)
- [ ] ★ Machine name procedurally generated and shown in ad headline
- [ ] ★ Flavor text procedurally assembled (seller name, reason, phone number)
- [ ] ★ "FREE TO GOOD HOME" framing for first machine (no cost to player)
- [ ] ★ Newspaper visual — Paperboy-style, chunky mono, columns, BLAHBLAH filler
- [ ] ★ First-person POV — hands holding paper at bottom of frame
- [ ] ★ Red marker circle — wobbly, slightly sloppy, drawn on canvas
- [ ] ★ Crossed-out ad in adjacent column (already sold — road not taken)
- [ ] ★ Click ad → stats card slides up from bottom over newspaper
- [ ] ★ Stats card — machine name, genre, mechanic, difficulty, condition, players, cost
- [ ] ★ Derived stat bar meters (Pop Ceiling, Revenue Rate, Lifespan, Novelty)
- [ ] ★ ACCEPT button on stats card → transition to garage
- [ ] ★ Transition — newspaper folds, garage fades in, machine already there
- [ ] Title screen — migrate to screens/title.js
- [ ] "First Listing" unlock — 3 ads shown with 3 colored circles when earned
- [ ] Stats card compare mode (click different ads to compare before accepting)

---

## THE FLOOR — VISUALS
- [ ] ★ Payphone iso sprite — wall-mounted, left of poster wall
- [ ] ★ Coin tray indicator on cabinet face (green/yellow/red pip meter)
- [ ] ★ Change machine stock meter on side face (visible from floor)
- [ ] Payphone "in use" animation (patron standing at it)
- [ ] Pinball cabinet iso sprite — horizontal, lower profile, wider
- [ ] Beat 'em Up cabinet sprite variant
- [ ] 3D Cabinet sprite variant — larger, more imposing footprint
- [ ] Dance Cabinet sprite — floor pads visible
- [ ] Second machine placement on floor (dynamic positioning)
- [ ] Machine placement system (slot grid, no overlap)
- [ ] Floor layout updating as machines added/removed
- [ ] Cabinet upgrades visible on sprite (2P Kit = wider panel, Subwoofer = box below)
- [ ] Marquee light upgrade — glow on cabinet top
- [ ] High score board — wall object, poster wall side
- [ ] Bulletin board — wall object
- [ ] Trophy case — floor object
- [ ] ATM — floor object, near entrance
- [ ] Security camera — wall mounted, corner
- [ ] Exterior neon sign visible through garage door opening

---

## THE FLOOR — MECHANICS
- [ ] ★ Coin tray filling over time as patrons play (per machine)
- [ ] ★ Collect tray interaction (Z on cabinet when tray has coins)
- [ ] ★ Coins added to player cash on collect
- [ ] ★ Tray full = machine stops accepting coins (red indicator)
- [ ] ★ Change machine stock depleting as patrons use quarters
- [ ] ★ Deposit coins at change machine (Z interaction)
- [ ] ★ Patrons unable to play when change machine empty
- [ ] ★ Patrons visibly leave when no quarters available
- [ ] ★ Raid change machine interaction — coin scatter animation
- [ ] ★ Payphone interaction — opens classified ads screen
- [ ] Payphone passive revenue — small $ per week from patron calls
- [ ] Popularity curve per machine (novelty → growth → peak → decay)
- [ ] Revenue rate tied to popularity curve (not flat per play)
- [ ] Machine breakdown event — random timer, flashing ! indicator
- [ ] Coin jam event — random timer, ¢ indicator
- [ ] Rowdy patron event — ‼ indicator, confrontation mechanic
- [ ] VIP patron event — ★ indicator, intercept for bonus revenue
- [ ] Spill event — wet floor hazard, mop required
- [ ] Machine retirement flow (sell/scrap options)
- [ ] Queue system scaling to machine player count (1P = 1 play spot)
- [ ] Multi-machine queue routing (patrons pick least busy machine)

---

## PURCHASE SYSTEM
- [ ] ★ Purchase menu UI — Genesis RPG bordered dialogue box
- [ ] ★ Change machine purchasable ($120 — first priority buy)
- [ ] ★ Payphone purchasable ($80 — second priority buy)
- [ ] ★ Insufficient funds feedback (can't buy what you can't afford)
- [ ] Machine upgrade menu — accessible from cabinet interaction
- [ ] Tier 1 upgrades all purchasable (Continue Credits, High Score Initials etc)
- [ ] Tier 2 upgrades unlock at correct time/condition
- [ ] Tier 3 upgrades unlock at correct time/condition
- [ ] Soft mechanical purchases (couch upgrade, better lighting etc)
- [ ] Operational purchases (ATM, security camera, AC etc)
- [ ] Purchase confirmation prompt before deducting cash
- [ ] New item appears on floor immediately after purchase

---

## CLASSIFIED ADS & MACHINE ACQUISITION
*The payphone screen — post-garage, all runs after first machine*
- [ ] ★ Payphone cutaway — over-the-shoulder 2D scene
- [ ] ★ Wall texture matches current location (garage = corrugated metal)
- [ ] ★ Hands holding receiver (first person, never see face)
- [ ] ★ Newspaper pinned to wall beside phone — 3 listings visible
- [ ] ★ Procedural listing generation per ad (genre/mechanic/players/cost/flavor/price)
- [ ] ★ Machine name in each ad headline
- [ ] ★ Page flip — receiver drops, cord dangles, off-screen raid sounds, return
- [ ] ★ Sound sequence (8 beats — newspaper, drop, cord, footsteps, CLANG, coins, grunt, return, clink, dial, flip)
- [ ] Era-aware listing pools (fighter machines flood Boom era ads)
- [ ] Distributor catalog screen (post-garage, better condition machines)
- [ ] Machine delivered animation (appears on floor after purchase)
- [ ] Wall texture variants for all location types
- [ ] Payphone skin variants per location (mall payphone, barcade wall unit etc)

---

## MACHINE CLASSIFICATIONS
*Standard / Surplus / Storied / Unique — the four tiers*
- [ ] Classification color coding on listing border (white/green/blue/gold)
- [ ] Classification color on stats card border — matches listing
- [ ] Standard listings — always in pool, normal ad layout
- [ ] Surplus listings — green border box, 1 in 8 pages, better than average
- [ ] Storied listings — own yellowed page, one ad centered, no other listings
- [ ] Unique listings — handwritten ad, own page, one per run maximum
- [ ] Descriptor system — Floor Model, Last Season, Classic, Vintage, Refurbished, One Owner, Toured, Championship, Import, Prototype
- [ ] Descriptor appears in ad copy and on stats card
- [ ] Surplus rarity roll on each page flip (1 in 8 chance)
- [ ] Storied unlock condition checking (once per run, conditions must be met)
- [ ] Unique unlock condition checking (once per run, specific criteria + pages flipped)
- [ ] Named machine pool — The Workhorse, The Import, The Prototype
- [ ] Named machine pool — The Championship Cabinet, The Boardwalk King, The Last One
- [ ] Named machine pool — Vintage Pinball Table (2 pinball machines unlock)
- [ ] Unique pool — Ray's Original (sold starting machine + reputation threshold)
- [ ] Unique pool — The Widowmaker (fighter during The Boom)
- [ ] Unique pool — Cabinet Zero (10 completed runs)
- [ ] Unlock condition detection for each named machine
- [ ] Storied page visual — yellowed paper renderer
- [ ] Unique page visual — handwritten font, single centered ad
- [ ] Ray's Original ad copy ("I heard you've been doing well. — Ray")

---

## CHANGE MACHINE TIERS
- [ ] ★ Tier 1 Clunker ($45) — 40 quarter capacity, occasional jams, 2 quarters per raid
- [ ] Tier 2 Standard ($180) — 120 quarter capacity, rare jams, digital display, 5 quarters per raid
- [ ] Tier 3 Pro ($420) — 300 quarter capacity, no jams, auto-alert at 20%, bill acceptor, 10 quarters per raid
- [ ] Change machine visual variant per tier (squat box → upright unit → sleek display)
- [ ] Bill acceptor mechanic on Tier 3 (patrons self-serve quarters)
- [ ] Auto-alert glow on Tier 3 at 20% stock (orange floor indicator)
- [ ] Tier upgrade flow (buy upgrade, machine replaces on floor)

---

## ERA SYSTEM
- [ ] ★ Year counter advancing on HUD (weeks → months → years)
- [ ] Era transition detection (1990→1991 The Boom etc)
- [ ] Era transition notification (subtle HUD message, no forced cards)
- [ ] Patron demographics shifting per era (teen flood in Boom)
- [ ] Machine popularity ceiling adjusting per era
- [ ] Decay rate adjusting per era (Reckoning = faster)
- [ ] Distributor catalog updating with new machine types per era
- [ ] Classified ad pool updating per era
- [ ] Rival aggression scaling per era
- [ ] Pinball nostalgia premium building through Recovery era
- [ ] New machine type availability gates (Beat 'em Up 1987+, 3D 1994+, Dance 1998+)

---

## REPLAYABILITY SYSTEMS
*Currently missing entirely — critical for long-term engagement*
- [ ] ◆ Random mid-run event card system (not forced purchases — story moments)
- [ ] ◆ Event card pool design (fire inspector, news crew, rival's machine breaks, cheat code spreads)
- [ ] Named regular patron system (small pool, appear across runs, have preferences)
- [ ] Regular patron loyalty — losing one feels different from losing anonymous patron
- [ ] Rival personality types (aggressive, charming, patient, desperate)
- [ ] Rival randomly named + typed each run
- [ ] Legacy item system — heavily upgraded machine leaves ghost in future classifieds
- [ ] Seasonal mechanic for State Fair / Boardwalk locations (summer only)
- [ ] Run biography — procedural story summary on end screen
- [ ] "This run" narrative hooks (machine name, seller name, rival name woven in)
- [ ] Challenge run modes (beyond achievements — explicit self-imposed constraints)

---

## LOCATION TRANSITIONS
- [ ] Location transition trigger detection (capacity, lease, rival, health code)
- [ ] Three-card choice screen — Genesis RPG menu style
- [ ] Procedural location name generation (Valley Mall, Rosewood Lanes etc)
- [ ] Special condition modifiers on cards (free month, noise ordinance etc)
- [ ] Rival sub-lease card (rare, locks certain endings)
- [ ] Stay put card with rent increase
- [ ] Moving sequence animation (floor empties, machines carried out)
- [ ] Moving truck graphic — era appropriate
- [ ] New floor fades in (different carpet, walls, lighting per location type)
- [ ] Loyal patron loss on move (some regulars don't follow)
- [ ] Rent system — weekly deduction from cash
- [ ] Capacity enforcement per location (can't buy machine if floor full)

---

## RIVAL SYSTEM
- [ ] Rival character — named, visible on floor occasionally (browsing, watching)
- [ ] Rival personality type assigned per run
- [ ] Valuation meter — tracks arcade worth (visible to player)
- [ ] Rival offer climbing with valuation (shown in HUD)
- [ ] Offer peak detection — prompt appears at right moment
- [ ] Accept/decline prompt with timing consequence
- [ ] Rival buyout ending screen (check amount)
- [ ] Rival outlasting failure state
- [ ] Rival sub-lease option during location transition

---

## MINI-GAMES
- [ ] After hours mode — floor goes dark, single spotlight on cabinet
- [ ] Cabinet Z-press at night → mini-game launch transition
- [ ] Mini-game: Fighter — 1v1, health bars, 3 rounds, Z/X/arrows
- [ ] Mini-game: Racer — pseudo-3D, 3 laps, avoid traffic
- [ ] Mini-game: Shooter — top-down, 5 waves + boss
- [ ] Mini-game: Pinball — full playfield, flippers, bumpers, multiball (unlock only)
- [ ] Difficulty inheritance from machine's curve setting
- [ ] Screen flicker on Worn condition machines
- [ ] Starting lives from cost per play (1Q = 3 lives, 2Q = 2 lives)
- [ ] High score persistence per machine per run
- [ ] Game over screen — blunt, era-appropriate, INSERT COIN energy
- [ ] Win screen — flash, score tally, floor fades back in
- [ ] Mini-game unlock triggers firing achievements

---

## ENDINGS
- [ ] 10-year run end detection
- [ ] Bankruptcy detection (cash < weekly rent, no recovery path)
- [ ] Health code failure state
- [ ] Fire event failure state
- [ ] Arrested failure state
- [ ] Closing night scene — machines going dark one by one
- [ ] Final tally screen (years open, peak pop, machines owned, revenue)
- [ ] End line based on exit timing
- [ ] Failure ending — notice taped to dark door, nothing else
- [ ] Rival buyout ending — check amount, timing line
- [ ] All 22 ending location variants (floor appearance matches destination)

---

## SOUND
- [ ] FM synth engine via Web Audio API
- [ ] Per-cabinet chiptune (generated from genre — fighter sounds different from racer)
- [ ] Coin clink on tray collect
- [ ] Coin cascade sound (tray dump + deposit)
- [ ] Change machine raid sequence (full 8-beat)
- [ ] Payphone dial tone
- [ ] Machine breakdown clunk
- [ ] Coin jam rattle
- [ ] Patron ambient murmur (scales with crowd size)
- [ ] Era-appropriate background music (Recovery vs Boom vs Reckoning feel different)
- [ ] Mini-game soundtracks
- [ ] Game over jingle (blunt, short)
- [ ] Win fanfare
- [ ] Location transition sting

---

## META PROGRESSION & UNLOCKS
- [ ] Run data persistence (localStorage)
- [ ] Achievement detection and unlock triggers
- [ ] All 22 ending variants tracked
- [ ] Tool shadow system (% of upgrade carries to next run)
- [ ] Starting pool expansion logic
- [ ] Cosmetic unlock storage and application
- [ ] Poster wall unlock system (achievements → new posters)
- [ ] Starting year unlock logic (1987 always, others earned)
- [ ] "First Listing" achievement → 3 starting ads
- [ ] One for the Ages badge detection (genre variants)
- [ ] STOCK badge detection
- [ ] Unnamed achievement detection (silent, no screen)

---

## POLISH & FEEL
- [ ] Patron walk cycle polish (smoother bob)
- [ ] Owner walk animation (arm swing, weight)
- [ ] Interact animation (lean forward, reach)
- [ ] Coin particle system tuning
- [ ] Screen flicker shader on Worn machines
- [ ] Cabinet screen glow pulsing with popularity
- [ ] Crowd density readable at a glance
- [ ] HUD polish — week/year/money/popularity all clean
- [ ] Pause menu
- [ ] Settings (volume, run history, controls)
- [ ] Zero-friction restart (death screen → new run in 2 keypresses)

---

## DESIGN DECISIONS — LOCKED ✓
*Do not revisit without good reason.*

- [x] Change machine Tier 1 price: **$45**
- [x] Payphone price: **$60**
- [x] Coin tray capacity: **20 plays before full**
- [x] Change machine Tier 1 starting stock: **40 quarters**
- [x] Change machine restock cost: **free — deposit coins you already collected**
- [x] Reroll cost: **10 quarters from change machine stock per flip**
- [x] Weekly rent — Garage $0 / Storefront $75 / Mall $160 / Standalone $280
- [x] Weekly rent — Bowling Alley $40 / Barcade $120 / Boardwalk $90 seasonal
- [x] Popularity curve: novelty wks 1–3, peak wk 6, decay wk 8, half-life wk 14, tail to wk 24
- [x] Valuation: (machines × avg condition × avg popularity%) × era modifier × location tier modifier
- [x] Era modifiers: Recovery 1.0x / Boom 1.4x / 3D Window 1.6x / Reckoning 0.8x
- [x] Tool shadow: **30%** of previous upgrade level carries to next run
- [x] Target run length: **20–25 minutes** (1 game week = ~45 real seconds)
- [x] Named regular pool: **12 total, 4 visible per run**
- [x] Mid-run event frequency: **1 per 2–3 game weeks**, era-weighted
- [x] Rival offers: first yr 1 (lowball) → peak yr 4–5 → declines yr 6 → lowball yr 8
- [x] Change machine Tier 2: $180 / 120 quarters / 5 quarters per raid
- [x] Change machine Tier 3: $420 / 300 quarters / bill acceptor / 10 quarters per raid

---

*Last updated: post-design session — pre-migration*
*Current build: v0.6 — YOU ARE IN THE ROOM*
*Repo: https://github.com/krushcuts/park-playce*
