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
