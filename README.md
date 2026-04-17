# QUARTER DRAIN
### A Roguelike Arcade Empire Game
> *"You knew when to walk away."*

---

## OVERVIEW

Quarter Drain is a fast-cycle roguelike where you build an arcade empire from nothing, watch it peak, and navigate its inevitable decline. Every run starts in a garage. Every run ends somewhere different. The best players don't survive longest — they read the arc better than anyone else.

Built to look and feel like a SEGA Genesis cartridge. Runs in the browser. A full run takes under 15 minutes.

---

## CORE PHILOSOPHY

**Inevitable, satisfying decline.**

You are not trying to win. You are trying to *peak gracefully*. The rival will come. The machines will age. The kids will move on. Your job is to build something worth remembering and exit before it turns sad.

---

## THE LOOP

1. Name your arcade
2. Draw your starting hand — genre, mechanic, difficulty, cabinet condition, neighborhood, year
3. Start in the garage with one machine
4. Build popularity, bolt on features, manage decay events
5. Read the valuation curve — sell, pivot, or hold
6. 10 year maximum
7. Where you land is your ending

---

## STARTING CONDITIONS

Every run begins with a randomized hand drawn from a finite pool of known elements. No building. No choosing. Just a garage, a machine, and the clock.

| Element | Pool |
|---|---|
| Genre | Fighter, Racer, Shooter, Platformer, Puzzle |
| Core Mechanic | One Button, Joystick Precision, Rhythm-Based |
| Difficulty Curve | Punishing, Fair, Easy |
| Cabinet Condition | Mint, Worn, Damaged, Barely Working |
| Neighborhood Traffic | Low, Medium, High |
| Starting Year | Randomized within era |

As you unlock new endings and achievements, new elements enter the pool. Veteran players face stranger, richer deals.

---

## MAKING A GAME

Your first machine is dealt, not designed. The combination of genre, mechanic, and difficulty determines:

- **Popularity ceiling** — how high it can peak
- **Lifespan** — how long before decay sets in
- **Audience** — who shows up and how long they stay

A punishing fighter burns hot and short. An easy puzzle game is slow but sticky. A rhythm-based racer on fair difficulty is a crowd pleaser with a long tail. Learn the combinations. Play the hand.

---

## DECAY SYSTEM

Decay happens as **events**, not erosion. Gut punches, not a slow bleed.

- A newer machine opens across town
- A kid figures out the cheat code and word spreads
- Your cabinet breaks down on a Saturday night
- A review in the local paper
- The rival makes a move

Every event is a decision moment.

---

## FEATURE CARDS

Bolt-ons that extend life, spike popularity, or change trajectory. Some are traps. Reading which card fits your current arc is skill expression.

| Card | Effect |
|---|---|
| Continue Credits | Extends session length, small revenue bump |
| 2-Player Mode | Popularity spike, doubles wear |
| High Score Board | Loyalty boost, regulars stay longer |
| Cabinet Art Upgrade | One-time hype injection |
| Tournament Hosting | Major spike, major cost |
| Blast Processing | +40% hype. Questionable actual effect. |
| Cheat Code Leak | Short spike, then backlash |
| Nostalgia Premium | *Unlocked via legacy* |
| Cult Following | *Unlocked via legacy* |

---

## THE RIVAL

One named rival. Personal. They don't just compete — they make offers.

The offer climbs as your valuation grows, peaks, then starts to slip. At the peak, a blinking prompt:

```
RIVAL HAS MADE THEIR BEST OFFER.
[ACCEPT]  [DECLINE]
```

Take it clean and the end screen is celebratory. Hold too long and they lowball you. Hold even longer and they just outlast you.

The buyout track cuts across all tiers and is available at any time.

---

## THE 22 ENDINGS

Every run ends somewhere. The space you're in when the run ends is the ending. No classification screen. The player knows.

### TIER 0 — FAILURE
*A notice taped to the door.*
- Went Broke
- Health Code Violation
- Fire
- Arrested
- Rival Outlasted You

### TIER 4 — SURVIVAL
*The lights are still on. That counts.*
- Airport Terminal
- Ferry Terminal
- Laundromat
- Truck Stop
- Hospital Waiting Room

### TIER 3 — PIVOT
*You adapted. No shame in it.*
- Pizza Restaurant
- State Fair / Carnival
- Bowling Alley
- Military Base Rec Room
- Diner Annex

### TIER 2 — LEGITIMATE
*You're part of something good.*
- Resort / Hotel Lobby
- College Student Union
- Mall Arcade
- Skating Rink
- Mini Golf / Go Kart Complex
- Movie Theater Lobby

### TIER 1 — DESTINATION
*People come specifically for you.*
- Boardwalk
- Amusement Park Midway
- Barcade
- Standalone Arcade
- **Indie Pinball Arcade** ← prestige run

---

## THE INDIE PINBALL RUN

The hardest ending to reach. Requires resisting scale, curating obsessively, surviving on reputation alone. You don't chase volume. You chase perfection. A dimly lit room, machines maintained with devotion, a line out the door on weekends.

Most players never get there.

---

## THE LOCATION ARC

You don't choose your ending. You accumulate it.

```
GARAGE → STOREFRONT → MALL UNIT → STANDALONE BUILDING → PIVOT LOCATION
```

Each move is a milestone and a risk. The space you're in when the run ends is the ending.

The garage is always the beginning. Everyone starts there. That's where the nostalgia lives.

---

## META PROGRESSION

### Ending Unlocks
Reach an ending, unlock something new:
- New starting elements enter the random pool
- Cabinet paint colors and designs
- Carpet patterns for your floor
- Marquee fonts and sign styles
- Patron sprite costumes
- Rival skins and personality types

Even bankruptcy unlocks your first paint color. No wasted run.

### Achievement Unlocks
How you played matters as much as where you landed.

**Genre Purist**
- Only racing games all run — *"Pole Position"*
- Only fighters — *"Final Round"*
- Only puzzle games — *"Big Brain"*
- Never repeat a genre — *"Eclectic"*

**Business Behavior**
- Never accept the rival's offer — *"Never Sold Out"*
- Accept the very first offer — *"Pragmatist"*
- Reach Tier 1 without ever leaving the original storefront
- Go bankrupt three runs in a row — *"Glutton for Punishment"*

**Machine Behavior**
- Never add a single feature card — *"Pure"*
- Stack every possible feature on one machine — *"Frankenstein"*
- Only ever own one machine — *"Minimalist"*

**Meta**
- Reach all 22 endings — *"I've Seen Everything"*
- Name your arcade the same thing 10 runs in a row

---

## THE END SCREEN

Not a game over card. A closing night scene. Your arcade floor one last time, machines going dark one by one. A final tally — years open, peak popularity, machines owned. And the number.

Then a single line:

```
"You knew when to walk away."      ← perfect exit
"Close. But you still got out."    ← slightly late
"They got you cheap."              ← held too long
```

Failure endings get something different entirely. Just a notice taped to a dark door.

---

## AESTHETIC

- **Platform:** Browser / HTML5 Canvas
- **Visual Style:** SEGA Genesis — dark palette, chunky pixels, neon-on-black, Mode 7-inspired top-down floor view
- **Audio:** FM synthesis via Web Audio API. Each cabinet has its own generated chiptune. The audio is the popularity meter.
- **UI Language:** Genesis RPG menus. Bordered dialogue boxes. Satisfying cursor click. Zero friction on restart.
- **Run Length:** Under 15 minutes
- **Restart:** Immediate

---

## BUILD ORDER

- [ ] The floor — top-down space, one cabinet, wandering patron sprites
- [ ] The money loop — quarters, popularity curve, basic decay
- [ ] The build menu — genre selection, cabinet reflected on floor
- [ ] Feature cards — bolt-ons affecting the curve
- [ ] The rival — pressure mechanic, offer system, endings
- [ ] Sound — FM-flavored chiptunes as final layer

---

## STATUS

> Pre-production. Design locked. Build starts tomorrow.

---

*Quarter Drain is a game about arcades made to feel like one.*

---

## UPGRADES & PURCHASES

Three categories. The distinction matters mechanically and for design integrity.

---

### CATEGORY 1 — OPERATIONAL
*Things that directly affect revenue, foot traffic, compliance, or survival. Some are gating items — without them, certain failure states become likely or inevitable.*

**Money Infrastructure**
- Change Machine — patrons can't play without quarters. Without this, foot traffic is wasted. Tier 1 unlock.
- ATM — raises the spending ceiling. Patrons stay longer and spend more. Mid-game purchase.
- Cash Register / Safe — reduces theft event probability. Required for later tiers.
- Coin Counter Machine — reduces end-of-week accounting losses (passive income boost)

**Machines & Revenue**
- Additional Arcade Cabinets — core expansion. Each has its own popularity curve.
- Pinball Machine — slower burn, different demographic, higher maintenance cost
- Redemption Machine (ticket games) — brings in families, lower per-quarter but higher volume
- Photo Booth — passive income, zero maintenance curve, low ceiling
- Vending Machine — food/drink revenue, small but reliable
- Jukebox — ambient, patron mood booster, small revenue stream

**Operations**
- Restroom — required for certain tier upgrades (health code). Unlocks longer patron stays.
- Air Conditioning — seasonal mechanic. Summer without AC = patron comfort penalty
- Security Camera — reduces theft events and vandalism damage
- Alarm System — reduces break-in event probability (late-game threat)
- Phone Line — required for tournament hosting and some feature cards

**Visibility**
- Exterior Neon Sign — increases foot traffic (patrons walking by convert higher)
- Sandwich Board / Sidewalk Sign — cheaper foot traffic boost, early game
- Flyer Distribution — temporary foot traffic spike, one-time purchase

---

### CATEGORY 2 — SOFT MECHANICAL
*Aesthetic purchases that have real but indirect effects. Spending on vibes instead of machines is a legitimate strategy. The tension is the design.*

**Seating**
- Basic Folding Chairs — slight dwell time boost. Cheap.
- Old Sofa (starting item) — medium dwell time. Already in garage.
- Decent Couch — better dwell time, higher patron comfort rating
- Nice Sectional — significant dwell time boost, unlocks "lounge crowd" patron type
- Bar Stools — pairs with bar tables. Enables standing-around culture.
- Bar Top Tables (starting items) — already in garage. Medium dwell boost.
- Proper Bar Tables — upgraded version. Better comfort, better look.

**Comfort & Atmosphere**
- Better Lighting — increases foot traffic conversion and patron mood
- Ceiling Fan — small comfort boost, visible on floor
- Carpet Upgrade — patron mood, reduced noise complaints (event mitigation)
- Dedicated Smoking Area — 1980s mechanic. Adds patron type, risk of fire event.
- Coat Rack / Lost & Found — tiny loyalty boost. Very cheap. Charming.

**Social Infrastructure**
- Bulletin Board — enables community events, small loyalty boost
- High Score Display (wall-mounted) — popularity boost, patron competition behavior
- Trophy Case — prestige boost, unlocks tournament events
- Newspaper / Magazine Rack — dwell time boost (waiting patrons)

---

### CATEGORY 3 — PURE COSMETIC
*No mechanical effect. Exist for player expression and unlock satisfaction. These are the things you spend money on when you're winning — or when you're proud of your place.*

**Surfaces**
- Wall Paint Colors (unlocked via achievements and endings)
- Floor Carpet Patterns (unlocked via achievements)
- Ceiling Tiles
- Wainscoting / Wall Trim styles

**Decorations**
- Fake Arcade Game Posters (unlocked via achievements — the poster wall)
- Custom Marquee Fonts for your arcade name
- Neon Sign Colors and styles (decorative, separate from operational sign)
- Plants / Fake Plants
- Vintage Clocks
- Lava Lamps
- Pinball Backglass Art (decorative versions of locked games)
- Seasonal Decorations (Halloween, Christmas — era-appropriate)

**Patron Cosmetics**
- Patron sprite costume unlocks (unlocked via achievements)
- Staff sprite (if you hire staff — later mechanic)

---

### UPGRADE TIERS BY LOCATION

Not all upgrades are available from the start. Availability gates by location tier.

| Upgrade | Garage | Storefront | Mall | Standalone | Pivot |
|---|---|---|---|---|---|
| Change Machine | ✓ | ✓ | ✓ | ✓ | ✓ |
| ATM | — | ✓ | ✓ | ✓ | ✓ |
| Restroom | — | — | ✓ | ✓ | ✓ |
| Air Conditioning | — | ✓ | ✓ | ✓ | ✓ |
| Security Camera | — | ✓ | ✓ | ✓ | ✓ |
| Trophy Case | — | — | — | ✓ | ✓ |
| Sectional Sofa | — | ✓ | ✓ | ✓ | ✓ |
| Neon Sign (exterior) | — | ✓ | ✓ | ✓ | ✓ |

---

### DESIGN NOTES

**The Change Machine is the most important early purchase.** It's not glamorous. It doesn't show up on the floor in a satisfying way. But without it, patrons who don't have quarters leave. It should be purchasable in week 1 and feel like a rite of passage.

**The ATM is the first aspirational purchase.** Seeing it go in should feel like a milestone. It means you believe in yourself enough to invite people to take out money in your building.

**Soft mechanical upgrades create the real strategic tension.** Do you buy a third cabinet or upgrade the seating? The right answer changes based on your current popularity curve, your patron dwell time, and how close the rival is.

**Cosmetic unlocks should feel earned, not bought.** Paint colors and carpet patterns shouldn't be purchasable with in-game money — they should unlock via achievements and endings. The aesthetic of your arcade is your biography, not your budget.


---

## STARTING MACHINE — NEW PLAYER RULES

On a fresh campaign with no save data, the starting machine is drawn from a restricted pool. This pool expands as the player completes runs and unlocks new characteristics.

---

### THE STARTING POOL (No Unlocks)

| Characteristic | Options | Draw Type |
|---|---|---|
| Genre | Fighter, Racer, Shooter, Pinball | Random draw (1 of 4) |
| Core Mechanic | Dual Joystick, Steering Wheel, Light Gun, Flippers* | Random draw (1 of 3); Flippers auto-assigned if Pinball drawn |
| Difficulty Curve | Escalating | Fixed — no draw |
| Cabinet Condition | Worn | Fixed — no draw |
| Player Count | 1P Only, 2P Competitive, 2P Co-op | Random draw (1 of 3) |
| Cost Per Play | 1 Quarter, 2 Quarters | Random draw (1 of 2) |

54 possible starting combinations. Enough variety that runs feel different. Small enough that experienced players can learn every permutation.

---

### NATURAL vs UNUSUAL COMBOS

Some genre + mechanic pairings are natural. Others are unusual. Both are valid draws — unusual combos get a novelty bonus at launch but a faster decay rate.

**Natural Pairings** — steady curve, reliable behavior
- Fighter + Dual Joystick
- Racer + Steering Wheel
- Shooter + Light Gun

**Unusual Pairings** — novelty spike, faster decay
- Fighter + Light Gun → target-shooting brawler
- Fighter + Steering Wheel → vehicular combat, niche appeal
- Racer + Dual Joystick → top-down arcade racer, lower immersion
- Racer + Light Gun → road combat hybrid, wild card
- Shooter + Dual Joystick → twin-stick shooter, actually strong
- Shooter + Steering Wheel → on-rails turret game, cult potential

---

### DERIVED STATS

The four derived stats are calculated from the combination — not drawn directly. Learning what combination produces what derived stats is the skill layer.

**Popularity Ceiling** — how high this machine can peak
**Revenue Rate** — quarters per hour at peak popularity
**Lifespan** — weeks before decay becomes significant
**Novelty** — the opening burst of curiosity traffic

| Genre | Ceiling | Revenue | Lifespan | Novelty |
|---|---|---|---|---|
| Fighter | High | High | Short | High |
| Racer | Medium | Medium | Medium | Medium |
| Shooter | Medium | Medium | Long | Low |

| Mechanic | Ceiling mod | Revenue mod | Lifespan mod | Novelty mod |
|---|---|---|---|---|
| Dual Joystick | — | — | + | — |
| Steering Wheel | — | — | — | ++ (spectators) |
| Light Gun | + | — | — | ++ (crowd gather) |

| Players | Effect |
|---|---|
| 1P Only | Predictable throughput. Steady. |
| 2P Competitive | Revenue doubles when both seats filled. Spectator popularity boost. |
| 2P Co-op | Longer sessions. Lower throughput. Higher patron satisfaction. |

| Cost | Effect |
|---|---|
| 1 Quarter | More plays per hour. Lower revenue ceiling. Higher patron goodwill. |
| 2 Quarters | Fewer plays. Higher revenue per patron. Steeper fall if unpopular. |

---

### MACHINE NAME GENERATION

Every machine gets a procedurally generated title on acquisition. The name goes on the cabinet marquee. Generated from genre + mechanic word pools.

**Fighter titles** — IRON FIST, BATTLE CLASH, STEEL KOMBAT, DEATH ROUND, FURY CAGE
**Racer titles** — TURBO CIRCUIT, SPEED DEMON, NITRO KING, ROAD FURY, APEX RUN
**Shooter titles** — STELLAR FORCE, BLASTER ZONE, COSMIC RAID, TARGET ZERO, NOVA STRIKE

Unusual combos get hybrid names — Fighter + Steering Wheel might produce DEATH RALLY or CAGE RACE. This is also an unlock target: reaching certain endings unlocks new name components for the pool.

---

### DIFFICULTY: ESCALATING (FIXED FOR NEW PLAYERS)

Escalating difficulty is the best teaching tool for new players. It starts easy — patrons enter, stay long, learn the machine. Revenue is modest. Then the difficulty ramps and credits burn faster. Revenue peaks. Then it gets too hard for casual players and the tail begins.

This teaches the popularity arc naturally. By the time a player unlocks other difficulty curves, they understand what decay feels like.

---

### CONDITION: WORN (FIXED FOR NEW PLAYERS)

The starting machine is worn. It works fine — patrons enjoy it — but it has a maintenance clock running from day one. Every few weeks there's a chance of a breakdown event. A breakdown costs money and loses a few days of revenue.

This is intentional friction. It teaches:
- Keep a repair budget
- Nothing runs forever
- The cabinet you buy from a classified ad is never perfect

---

### THE INTRO SEQUENCE

Three beats before the garage floor appears:

**Beat 1: Name Your Arcade**
Blinking cursor. Type anything. Up to 14 characters. This name goes on the marquee, the lease, the rival's buyout offer, and the closing night screen.

**Beat 2: The Classified Ad** *(to be built)*
A newspaper clipping, 1981. Smudged newsprint aesthetic. Procedurally assembled from the machine draw. The player learns what they bought and from whom before they ever see the garage.

```
THE DAILY REGISTER  —  CLASSIFIEDS  —  JUNE 4, 1981

FOR SALE: [GENRE] arcade cabinet, [MECHANIC] controls.
Works good. Some wear. Moving, must sell. $[PRICE].
Call Ray after 6pm. [PHONE NUMBER].
```

**Beat 3: Machine Stats Card** *(to be built)*
The hand revealed. Full characteristics plus derived stats shown as bar meters. The player sees exactly what they're working with before the clock starts.

```
╔══════════════════════════════╗
║  MACHINE ACQUIRED            ║
║  ————————————————————————    ║
║  NAME:       [GENERATED]     ║
║  GENRE:      FIGHTER         ║
║  CONTROLS:   DUAL JOYSTICK   ║
║  DIFFICULTY: ESCALATING      ║
║  CONDITION:  WORN            ║
║  PLAYERS:    2P COMPETITIVE  ║
║  COST/PLAY:  2 QUARTERS      ║
║  ————————————————————————    ║
║  POP CEILING:   ████░░       ║
║  REVENUE RATE:  ███░░░       ║
║  LIFESPAN:      ███░░░       ║
║  NOVELTY:       ████░░       ║
╚══════════════════════════════╝
```

After the stats card — the garage door opens. The clock starts. Week 1, 1981.

---

### UNLOCK PROGRESSION

Each completed run (win or lose) unlocks new entries into the starting pool. The pool never resets. This is the permanent progression layer.

**Example unlocks:**
- Survive 3 years → Puzzle genre enters pool
- Reach any Tier 2 ending → Trackball mechanic enters pool
- Go bankrupt → Easy difficulty curve enters pool (you learned the hard way)
- Reach Indie Pinball ending → Pinball machine type enters pool
- Complete all 22 endings → Full pool unlocked

The garage always looks the same. The machine inside it is different every time.


---

## MINI-GAMES

Every cabinet on your floor is a playable arcade game. Not just furniture — a game inside a game.

---

### ACCESS

Click any cabinet on your floor. A menu appears:

```
[PLAY]  [UPGRADE]  [INFO]  [SELL]
```

Select PLAY → mini-game launches full screen, Genesis aesthetic.
ESC or game over → return to floor view.

---

### AFTER HOURS RULE

Playing your own machine happens after hours. The floor goes dark. A single spotlight on the cabinet. Patrons are gone. It's your time.

No revenue impact. No queue disruption. Pure play.

---

### MINI-GAME INHERITANCE

The mini-game inherits the machine's drawn characteristics:
- **Difficulty Curve** affects enemy AI, obstacle density, pacing
- **Cabinet Condition** affects visual glitches (Worn = occasional screen flicker mid-game)
- **Cost Per Play** affects starting lives (1 quarter = 3 lives, 2 quarters = 2 lives — you're playing for keeps)

Same base game. Different machine characteristics. Different experience.

---

### THE THREE STARTING MINI-GAMES

**FIGHTER — (e.g. IRON FIST)**
1v1 fighting game. Health bars. Three rounds.
- Controls: arrows = move/crouch/jump, Z = punch, X = kick, Z+X = special
- Enemy AI has three skill tiers, unlocked progressively
- Win condition: win 2 of 3 rounds across 3 matches
- Run time: under 3 minutes

**RACER — (e.g. TURBO CIRCUIT)**
Pseudo-3D forward-scrolling road racer.
- Controls: left/right arrows = steer, Z = accelerate, X = brake
- Avoid oncoming traffic and road hazards
- Three laps, lap times are your score
- Win condition: finish all three laps without totaling the car

**SHOOTER — (e.g. STELLAR FORCE)**
Top-down wave shooter. Space Invaders DNA.
- Controls: arrows = move, Z = fire, X = bomb (limited)
- Five enemy waves plus a boss
- Win condition: clear all five waves

---

### HIGH SCORES

High scores persist for the duration of a run. Beat your own score on a machine = secondary unlock tier. High scores reset with each new run — another thing you're building from scratch.

A wall-mounted High Score Board (purchasable upgrade) displays the top 5 scores per machine on the arcade floor. Patrons react to it.

---

### UNLOCK REWARDS

| Achievement | Unlock |
|---|---|
| Beat Fighter (any difficulty) | Competitive patron type enters spawn pool |
| Beat Fighter on hard AI | 2P Fighter mini-game (pass-and-play at one keyboard) |
| Beat Racer under par time | Patron movement speed upgrade purchasable |
| Beat Shooter all 5 waves | New poster unlocks on poster wall |
| Set high score on any game | Unique cabinet skin for that genre |
| Beat all 3 starting mini-games | "Arcade Champion" achievement + special patron costume |
| Beat any game on first attempt | "Natural" achievement |
| Lose all lives on first screen | "Humbling" achievement (still unlocks something small) |
| Beat a game without losing a life | "Free Play" achievement |

---

### THE FEELING

**Losing** should feel like being a kid in 1981. You lasted 45 seconds. Screen flickers. GAME OVER in blocky red type. INSERT COIN. The game is slightly mocking.

**Winning** should feel like the whole arcade saw it. Screen flash. Score tally. A moment of silence before the floor fades back in. Your high score is now on the board.

---

### FUTURE MINI-GAMES (unlock via pool expansion)

As new genres enter the starting pool through progression, their mini-games become playable:

- Puzzle → sliding tile or falling block game
- Platformer → single-screen platformer, flag at top
- Sports → one-on-one basketball or penalty kicks
- Horror → top-down maze escape, limited vision
- Maze → classic dot-eating maze (one obvious inspiration)
- Pinball → full playable pinball table (Indie Pinball ending requirement)

The Pinball mini-game is the most complex to build and the hardest to beat. Reaching the Indie Pinball ending without having beaten your own pinball machine first is considered the true prestige run.


---

## PINBALL AS A STARTING MACHINE

Pinball is a first-class starting option alongside Fighter, Racer, and Shooter. It is mechanically distinct from video game cabinets in almost every way.

---

### WHY THIS MATTERS NARRATIVELY

It's 1981. Pinball isn't retro yet — it's the incumbent. Video games are the challenger. Starting with a pinball machine means you're the old guard trying to survive the digital wave. That's a different emotional arc than any video game start.

Running a pinball-only campaign and reaching the Indie Pinball Arcade ending is the game's truest story. You started with what was already fading, believed in it anyway, and turned it into a destination.

---

### PINBALL MECHANICAL DIFFERENCES

**Mechanic is always Flippers.** No draw needed. If Pinball is drawn as genre, mechanic is auto-assigned.

**Cabinet is visually distinct.** Horizontal playfield, glass top, score reels or early LED display. In iso view: wider footprint, lower profile than a video cabinet. Requires its own sprite.

**Revenue curve** — long and flat. Slower revenue than video games at peak, but almost no floor. Pinball regulars are devoted. They don't stop coming.

**Maintenance** — physical parts fail more frequently but less catastrophically. Bumpers, flippers, solenoids. Small recurring costs rather than occasional large breakdowns. Budget management feels different.

**Player Count draw** — 1P Only or 2P Competitive (taking turns, classic pinball). No co-op draw available for pinball.

**Patron behavior** — Pinball patrons are older on average. They arrive slower, stay longer, and are significantly more loyal than video game patrons. Losing a pinball regular hurts more than losing a video game patron.

**Novelty modifier** — In 1981, pinball gets no novelty bonus (it's established). By 1985, it gets a nostalgia modifier as video games dominate. By 1989, the nostalgia premium is significant. Pinball machines appreciate in perceived value as the years pass — the only machine type that does this.

---

### THE PINBALL CAMPAIGN

A pure pinball run requires a completely different strategy:

- Resist buying video game cabinets (they dilute the identity)
- Invest heavily in maintenance budget
- Curate: every pinball machine you add should be a specific title choice
- Lean into the older demographic — they spend more per visit
- Ignore the rival's pressure to modernize — that's the trap
- Survive long enough for the nostalgia premium to kick in
- Reach Indie Pinball Arcade

This is the hardest ending to reach from a pinball start. It's also the only ending that feels *inevitable* if you play it right.

---

### PINBALL MINI-GAME

The most complex mini-game to build but the most satisfying. Full playfield with:
- Ball physics (gravity, bounces, spin)
- Flippers (left/right Z and X keys)
- Bumpers, targets, ramps, drains
- Multiball event (rare, requires specific target sequence)
- High score table that persists through the run

Beating the pinball mini-game is required to reach the Indie Pinball Arcade ending. Reaching that ending without having beaten it first is considered the true prestige run.

---

### STARTING POOL WITH PINBALL

| Genre Draw | Mechanic | Player Count Draw | Cost Draw | Combinations |
|---|---|---|---|---|
| Fighter | Dual Joystick, Steering Wheel, or Light Gun | 1P / 2P Comp / 2P Co-op | 1Q / 2Q | 18 |
| Racer | Dual Joystick, Steering Wheel, or Light Gun | 1P / 2P Comp / 2P Co-op | 1Q / 2Q | 18 |
| Shooter | Dual Joystick, Steering Wheel, or Light Gun | 1P / 2P Comp / 2P Co-op | 1Q / 2Q | 18 |
| Pinball | Flippers (auto) | 1P / 2P Comp | 1Q / 2Q | 4 |
| **Total** | | | | **58** |

58 starting combinations. Learnable. Varied. Every new player will encounter something different.
