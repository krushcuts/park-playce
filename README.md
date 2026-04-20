# QUARTER DRAIN
### A Roguelike Arcade Empire Game
> *"You knew when to walk away."*

---

## 1. WHAT IS THIS GAME?

Quarter Drain is a third-person roguelike action-management game. You play as the owner of an arcade, physically present on the floor, building an empire from a single machine in a garage to whatever you can hold together over 10 years.

Every run starts the same: a garage, a worn cabinet bought from a classified ad, $85, and moderate consistent foot traffic. Every run ends somewhere different. The goal is not to win — it is to peak gracefully and exit at the right moment.

**Genre:** Roguelike / Action Management
**Perspective:** Third-person isometric (Hades-style)
**Platform:** Browser (HTML5 Canvas)
**Target run length:** Under 15 minutes
**Aesthetic:** SEGA Genesis — dark palette, FM synth audio, chunky pixels

---

## 2. HOW DO YOU PLAY IT?

### Controls
- **WASD / Arrow Keys** — move the owner character around the arcade floor
- **Z** — interact with the nearest highlighted object
- **ESC** — pause / menu

### The Camera
Isometric top-down view. The floor is always visible. You are a character on it — depth-sorted with patrons, furniture, and machines. You can walk behind the sofa, in front of the cabinet, through the crowd.

### Moment to Moment
You are in the room. Patrons enter through the garage door, queue at machines, spend quarters, and leave. Problems appear as floating indicators above machines and patrons. You walk to them and press Z to resolve them.

The arcade runs without you — revenue ticks up, decay ticks down — but problems only get fixed when you physically get there. Being in one place means not being somewhere else. That tension is the game.

### Your Tools
Tools replace abilities. Each is equippable, upgradeable, and carries a shadow of its upgrade into the next run.

| Tool | Function | Upgrade Path |
|---|---|---|
| **Wrench** | Fixes broken machines | → Faster fix → Fix without stopping |
| **Cash Roll** | Restocks change machine | → Larger capacity → Auto-restock |
| **Clipboard** | Check stats and patron mood | → Wider radius → Predictive decay |
| **Megaphone** | Direct patrons | → Larger radius → Redirect mid-queue |
| **Mop** | Clean spills and hazards | → Faster → Passive auto-mop aura |

### Interactable Objects
Walk up to anything and a prompt appears. Press Z to act.

| Object | Interaction |
|---|---|
| Cabinet (healthy) | Collect coin tray — empties accumulated coins into your pocket |
| Cabinet (full tray) | Collect immediately — machine stops accepting coins when tray is full |
| Cabinet (broken) | Fix it — wrench animation, machine restarts |
| Cabinet (coin jam) | Clear jam — coins scatter on floor |
| Change Machine (stocked) | Deposit collected coins — keeps patrons supplied with quarters |
| Change Machine (low) | Deposit urgently — patrons can't play if it runs dry |
| Change Machine (any) | Raid it — pulls quarters for a classifieds page flip. Consequences if drained. |
| Change Machine (absent) | No change machine = patrons with bills can't play. First purchase priority. |
| Payphone | Open classifieds — browse 3 machine listings for your next purchase. Flip page by raiding change machine. Must be purchased first — not a starting item. |
| Patron (queue) | Direct to different machine or eject |
| Patron (rowdy) | Confront — they calm or leave |
| Patron (VIP) | Intercept before they get bored — bonus revenue |
| Door | Toggle open / closed |

---

## 3. THE CORE LOOP

Every run follows the same structure:

```
NAME YOUR ARCADE
       ↓
CLASSIFIED AD — buy a worn machine
       ↓
MACHINE STATS CARD — see what you drew
       ↓
GARAGE — week 1, 1987, one machine
       ↓
BUY CHANGE MACHINE — patrons need quarters to play
       ↓
BUILD POPULARITY → COLLECT COINS FROM CABINETS → RESTOCK CHANGE MACHINE → MANAGE DECAY EVENTS
       ↓
BUY PAYPHONE — unlocks fleet expansion and generates passive revenue
       ↓
BUY MORE MACHINES / UPGRADES / OPERATIONAL ITEMS
       ↓
LOCATION TRANSITION — choose your next space
       ↓
GROW OR PIVOT OR SELL
       ↓
10 YEARS MAXIMUM — ending determined by your decisions
```

The run ends when you go bankrupt, get shut down, sell to the rival, or survive 10 years. Where you are and what you've built when the clock stops is your ending.

---

## 4. THE 10-YEAR ARC

### Starting Locations
Every run begins in a **garage**. Always. The garage is the origin. It is the emotional anchor of the whole game.

### Location Progression
You don't automatically advance. At threshold moments — lease expiry, capacity limits, rival pressure, health code events — you are presented with **location cards** and you choose.

```
GARAGE → STOREFRONT → MALL UNIT → STANDALONE BUILDING → PIVOT LOCATION
```

Each location has a floor capacity, weekly rent, and demographic profile. Moving costs money and loses a few loyal patrons who won't travel. Staying put costs you growth.

### The Choose Your Own Adventure Moment

At a transition trigger, three cards appear:

```
YOUR LEASE IS UP. THREE OFFERS ON THE TABLE.

┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  VALLEY MALL        │  │  ROSEWOOD LANES     │  │  STAY PUT           │
│  Unit 14B           │  │  Bowling Alley      │  │  Month-to-month     │
│  ─────────────────  │  │  ─────────────────  │  │  ─────────────────  │
│  TIER 2             │  │  TIER 3             │  │  CURRENT            │
│                     │  │                     │  │                     │
│  + High foot traffic│  │  + Cheap rent       │  │  + No moving cost   │
│  + Climate control  │  │  + Loyal locals     │  │  - Rent up 20%      │
│  - Strict lease     │  │  - Low ceiling      │  │  - Rival encroaches │
│  - Moving cost $400 │  │  - Moving cost $150 │  │                     │
│                     │  │                     │  │                     │
│  CAP: 6 machines    │  │  CAP: 3 machines    │  │  CAP: 2 machines    │
│  RENT: $180/wk      │  │  RENT: $60/wk       │  │  RENT: $95/wk       │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

Stay put is always an option. The rival sub-lease is occasionally one of the three cards — operating inside their building, revenue share, their name on the sign. It may be the only financially viable option. It is always a compromise of identity.

**Transition triggers:**
- Lease expires
- Floor is at max capacity
- Rival opens next door
- Health code failure
- Year milestones (end of year 2, 5, 8)
- Unexpected windfall offer

### Floor Capacity by Location

| Location | Max Machines |
|---|---|
| Garage | 2 |
| Storefront | 4 |
| Mall Unit | 6 |
| Standalone Building | 8–10 |
| Pivot Locations | Varies (Bowling: 3, Barcade: 5, Boardwalk: 8) |

### The Era System

Every run passes through up to four eras. Each era has a distinct cultural climate that affects patron behavior, machine values, event card pools, and the rival's aggression. The passage of time is not neutral — the world changes around your arcade whether you're ready or not.

**Starting year: always 1987.** Every new run opens in the same year. The crash survivors are your competition. Something good is coming — you just have to build toward it. Earlier starting years unlock through progression but 1987 is always the baseline.

| Era | Years | Climate | Mechanical Effect |
|---|---|---|---|
| **The Wreckage** | 1985–1986 | The crash is happening. Consumer trust is gone. Arcades closing nationwide. | Low foot traffic. High rent pressure. Rival is desperate and aggressive. Only available after unlock — not recommended for new players. |
| **The Recovery** | 1987–1990 | Post-crash. Beat 'em ups dominate. Lean, identity-driven arcades. | Moderate, consistent foot traffic. Pinball nostalgia premium begins. Barcade path opens. Fighter machines building momentum. |
| **The Boom** | 1991–1993 | Brawl Kings II drops. Arcades explode. Teen demographic floods in. Controversy follows. | Fighter machines hit highest popularity ceiling in the game. Tournament system fully active. Controversy events possible. |
| **The 3D Window** | 1994–1996 | 3D cabinets arrive. Arcades have hardware consoles can't match. Last great technological advantage. | 3D Cabinet machine type unlocked. Premium pricing possible. Spectator events peak. Home console warning card fires. |
| **The Reckoning** | 1997–1999 | Home consoles close the gap. The writing is on the wall. | Patron spawn slows. Decay accelerates on older machines. Step Fever and redemption machines available as pivots. Barcade and Indie Pinball are the most viable exits. |

### How the Eras Affect the Floor

Eras shift the game's conditions organically — no forced purchase windows, no time-locked events you must act on to survive. The world changes around you and you respond on your own terms.

**What actually changes between eras:**

- **Patron demographics shift** — The Recovery brings older, loyal patrons. The Boom floods the floor with teens. The Reckoning thins the crowd.
- **Machine popularity ceilings change** — Fighter machines peak higher during The Boom. Pinball nostalgia premium builds through The Recovery. 3D Cabinets command premium pricing in The 3D Window.
- **Distributor catalog expands** — New machine types become available as eras progress. Beat 'em ups in 1987. 3D Cabinets in 1994. Dance Cabinets in 1998. They appear in the catalog when the era arrives — you buy them when you're ready, if you want them.
- **Classified ads reflect the era** — What's available in the paper changes. Late Boom era floods the classifieds with fighter machines. Reckoning era fills them with machines from closing arcades — cheap, worn, a little sad.
- **Rival behavior** — Aggressive during The Wreckage. Opportunistic during The Boom. Predatory during The Reckoning.
- **Decay rate** — Accelerates in The Reckoning as home consoles close the gap. Not a card. Not an announcement. Just a number quietly changing in the background.

The eras are weather. You don't fight the weather — you dress for it.

### Starting Year Unlocks

| Unlock Condition | Starting Year |
|---|---|
| Always — fixed | 1987 |
| Survive to 1994 in any run | 1985 — deep in the crash, two years before recovery |
| Reach any Tier 1 ending | 1991 — start right at the Boom |
| Complete all 22 endings | 1978 — the true beginning |

Starting in 1991 hands you the Boom but gives you fewer years before the Reckoning. Starting in 1985 is the hardest arc — open during the crash, fight through the wreckage to reach the Recovery, and if you survive that, the Boom.

### Machine Type Catalog

Every machine on your floor belongs to a genre and machine type. New types become available as eras progress — they appear in the distributor catalog and eventually in the classifieds. This list is not comprehensive. Players can accumulate many machines across many genres over a run. These are the types the game draws from.

| Genre / Machine Type | Era Available | Mechanic | Notes |
|---|---|---|---|
| Fighter | Always (1987+) | Dual Joystick | Core starting genre. High ceiling, short tail. |
| Racer | Always (1987+) | Steering Wheel | Core starting genre. Broad appeal, steady curve. |
| Shooter | Always (1987+) | Light Gun | Core starting genre. Long tail, loyal regulars. |
| Beat 'em Up | 1987+ | Dual Joystick | Arrives with The Recovery. Crowd-pleaser. |
| Platformer | 1987+ | Single Joystick | Family friendly. Long tail. Kids demographic. |
| Puzzle | 1987+ | Trackball or 1-Button | Slow build. Intellectual crowd. Very long tail. |
| Maze | 1987+ | Single Joystick | Classic appeal. Broad demographic. Safe pick. |
| Pinball | Any era | Flippers | Mid-run acquisition only. Appreciates over time. |
| Sports | 1987+ | Dual Joystick | Seasonal spikes. Wide age range. |
| Horror | 1987+ | Light Gun or Joystick | High novelty. Controversy risk. Cult potential. |
| Sit-Down Racer | 1989+ | Steering Wheel + Seat | Upgrade path from standard Racer. |
| 3D Fighter | 1994+ | Dual Joystick | The 3D Window era. Premium price. Spectator magnet. |
| 3D Racer | 1994+ | Steering Wheel | Large footprint. Highest immersion available. |
| Dance Cabinet | 1998+ | Floor Pads | The Reckoning pivot. New demographic entirely. |
| Redemption | Any era | Varies | Ticket games. Kids and families. Lower per-play revenue, high volume. |

**Name generation:** Every machine gets a procedurally generated title drawn from genre-specific word pools. No two runs will produce the same named machine. See section 6 for the name pools.

---

## 5. THE 22 ENDINGS

You don't choose your ending. You accumulate it. The space you're in when the run ends is the ending. No classification screen. The player knows.

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
- **Indie Pinball Arcade** ← prestige ending

Plus the **rival buyout track** — available at any time, cuts across all tiers.

### The End Screen
Not a game over card. A closing night scene. Machines going dark one by one. A final tally. Then a single line:

```
"You knew when to walk away."      ← perfect exit
"Close. But you still got out."    ← slightly late
"They got you cheap."              ← held too long
```

Failure endings get a notice taped to a dark door. Nothing else.

---

## 6. YOUR STARTING MACHINE

### The Intro Sequence

**Beat 1 — Name Your Arcade**
Blinking cursor. Up to 14 characters. This name goes on the marquee, the lease, the rival's offer, and the closing night screen.

**Beat 2 — The Classified Ad**
A single newspaper clipping, 1987. Your first machine — one listing, no browsing, no choice. You called about one ad. This is what you got.
```
THE DAILY REGISTER  —  CLASSIFIEDS  —  JUNE 4, 1987

FOR SALE: [GENRE] arcade cabinet, [MECHANIC] controls.
Works good. Some wear. Moving, must sell. $[PRICE].
Call Ray after 6pm. [PHONE NUMBER].
```
All subsequent machine purchases use the payphone on the wall and show 3 listings at once. The opening is the only time you see just one — unless you've unlocked the *"First Listing"* achievement, in which case the opening classified ad screen shows 3 listings. You've earned the right to browse.

**Beat 3 — Machine Stats Card**
Your hand revealed before the clock starts.
```
╔══════════════════════════════╗
║  MACHINE ACQUIRED            ║
║  ————————————————————————    ║
║  NAME:       IRON FIST       ║
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

### The Starting Pool (New Player — No Unlocks)

| Characteristic | Options | Notes |
|---|---|---|
| Genre | Fighter, Racer, Shooter | Random draw — 3 options |
| Core Mechanic | Dual Joystick, Steering Wheel, Light Gun | Random draw — 3 options |
| Difficulty Curve | Escalating | Fixed for new players |
| Cabinet Condition | Worn | Always |
| Player Count | 1P Only, 2P Competitive, 2P Co-op | Random draw — 3 options |
| Cost Per Play | 1 Quarter, 2 Quarters | Random draw — 2 options |

**54 possible starting combinations.** Enough variety that runs feel different. Small enough that experienced players can learn every permutation.

Pinball is not a starting option. It enters the pool only after reaching the Indie Pinball ending. You don't start there — you arrive there.

### Natural vs Unusual Combos

**Natural pairings** — steady curve, reliable behavior:
- Fighter + Dual Joystick
- Racer + Steering Wheel
- Shooter + Light Gun

**Unusual pairings** — novelty spike on launch, faster decay:
- Fighter + Steering Wheel (vehicular combat)
- Racer + Dual Joystick (top-down racer)
- Shooter + Dual Joystick (twin-stick — actually strong)
- Any + mismatched mechanic

### Derived Stats

Calculated from the combination — not drawn directly. Learning what combination produces what stats is the skill layer.

| Genre | Pop Ceiling | Revenue | Lifespan | Novelty |
|---|---|---|---|---|
| Fighter | High | High | Short | High |
| Racer | Medium | Medium | Medium | Medium |
| Shooter | Medium | Medium | Long | Low |

Pinball stats are not listed here — it is not a starting genre. When acquired mid-run its curve is distinct: low initial ceiling that appreciates over time as the nostalgia premium builds. The only machine type that gets more valuable as the years pass.

### Machine Name Generation
Every machine gets a procedurally generated title from genre-specific word pools. These are examples — the pools are larger than listed here and expand with unlocks.

| Genre | Example Names |
|---|---|
| Fighter | IRON FIST, BATTLE CLASH, STEEL KOMBAT, DEATH ROUND, FURY CAGE |
| Racer | TURBO CIRCUIT, SPEED DEMON, NITRO KING, APEX RUN, COAST RUNNER |
| Shooter | STELLAR FORCE, BLASTER ZONE, COSMIC RAID, NOVA STRIKE, AFTERBURN |
| Beat 'em Up | STREET JUSTICE, TWIN BRAWLERS, STEEL AXE, IRON KNUCKLE |
| Platformer | JUMP HERO, SKY RUNNER, TOWER DASH, LEAP FORCE |
| Puzzle | MIND LOCK, BLOCK STORM, CUBE FEVER, PATTERN KING |
| Maze | DOT GOBBLER, CRAWLER, GRID RUNNER, MAZE FURY |
| Sports | COURT CLASH, FIELD BRAWL, GOAL ZONE, SLAM COURT |
| Horror | CRYPT RAIDER, DEAD ZONE, NIGHT CRAWLER, FEAR RUN |
| 3D Fighter | POLYGON PUNCH, IRON KOMBAT, CHROME FIST, HARD EDGE |
| 3D Racer | OVAL THUNDER, CHROME CIRCUIT, SPEED GRID, APEX 3D |
| Dance | STEP FEVER, BEAT WAVE, RHYTHM STORM, FLOOR KING |
| Pinball | SILVER BALL, TILT FEVER, PLUNGE, BUMPER KING |



---

## 7. THE MACHINE FLEET

**This game is not about one machine.** One machine is week one. A good run ends with 4–8 machines on the floor, each at a different point in its curve.

### The Machine Lifecycle
```
ACQUIRE → INSTALL → PEAK → MAINTAIN → DECISION POINT → RETIRE or UPGRADE
```

### Acquiring New Machines

| Source | When Available | Notes |
|---|---|---|
| Classified Ads | Always | Cheap, worn, unknown history |
| Distributor Catalog | After leaving garage | Better condition, known specs, higher price |
| Event Cards | Random | Traveling salesman, competitor liquidation, new title shipment |

### The Classified Ads Screen
The classified ads screen is the machine acquisition UI for all purchases after the first. Accessed via the **payphone** — which must be purchased before it can be used. Until you own a payphone, you cannot buy additional machines. Always shows **3 listings at once**.

The payphone also generates small passive revenue from patron calls. Scales with foot traffic. Never a primary income source but meaningful when saving for a second machine.

The opening machine is the only exception to the 3-listing rule — one ad, no browsing, no alternatives.

**Exception:** Players who have unlocked the *"First Listing"* achievement see 3 listings at the opening too. Same newspaper, same payphone cutaway, but now there are options before the clock even starts.

```
THE DAILY REGISTER  —  CLASSIFIEDS  —  PAGE 1

┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ FIGHTER CABINET   │  │ RACER CABINET     │  │ SHOOTER CABINET   │
│ Dual joystick     │  │ Steering wheel    │  │ Light gun         │
│ 2P Competitive    │  │ 1P Only           │  │ 2P Co-op          │
│ 1 quarter         │  │ 2 quarters        │  │ 1 quarter         │
│                   │  │                   │  │                   │
│ "Works good.      │  │ "Moving, must     │  │ "Son outgrew it.  │
│ Some wear."       │  │ sell fast."       │  │ Good shape."      │
│                   │  │                   │  │                   │
│ $220              │  │ $185              │  │ $240              │
└───────────────────┘  └───────────────────┘  └───────────────────┘

                    [ FLIP TO NEXT PAGE → ]
```

To flip to a new page, walk to the change machine and raid it — each raid pulls quarters to fund another call. No quarters, no flip. All listings are always Worn condition.

### The Payphone Cutaway Sequence
When you walk to the payphone and press Z, the ISO floor fades and a Genesis-style cutaway takes over.

**Beat 1 — The Payphone**
Over-the-shoulder, slightly below eye level. Receiver in hand. Wall behind the phone matches your current location. 16–32 colors maximum — true Genesis constraint. Bold shapes, deliberate dithering, no gradients. The payphone never changes across locations. Same scratched metal. Same dangling cord. Familiar in an unfamiliar room. You never see your character's face. These are your hands. This is you.

The wall behind changes with every location:
- **Garage** — corrugated metal, corner of roll-up door, bare bulb shadow
- **Storefront** — painted drywall, edge of exterior sign through window
- **Mall** — beige tile, fluorescent strip, warmer palette
- **Barcade** — exposed brick, neon edge-glow bleeding in
- **Bowling Alley** — wood panel, rental shoe rack at the edge

**Beat 2 — Browse**
Three listings readable on the newspaper pinned next to the phone. Select one to buy or decide to flip.

**Beat 3 — The Raid**
Newspaper sets down. Receiver drops — doesn't hang up cleanly, just falls and dangles. Cord swings. Camera holds on the dangling phone and empty frame.

**Beat 4 — Off Screen**
Character gone. Phone hanging. Then from off-screen: metal on metal, coins scattering, a frustrated grunt. The change machine is getting it.

**Beat 5 — Return**
Footsteps back. Hands reappear. Quarter drops in — that clink. Newspaper flips to a new page. Three new ads.

**The Sound Design** — eight seconds, sold entirely by audio:
```
newspaper sets down → phone drops off receiver → cord sways
footsteps recede → silence → CLANG → coins cascade → grunt
footsteps return → quarter clinks into slot → dial tone → page turn
```

### Portfolio Management
A healthy floor has machines at different curve stages:
- Machine 1 (year 2): past peak, still earning, on borrowed time
- Machine 2 (month 4): at peak, maximum revenue
- Machine 3 (week 2): novelty phase, building audience
- Machine 4 (year 3): slow burn, deeply loyal regulars

### Demographic Competition
Different machines attract different patrons. Two fighters splits the fighting crowd. A pinball machine brings older patrons who ignore video games. A platformer brings kids who wander. The best floors are complementary — different genres, different demographics, different curve phases.

### Selling and Retiring

| Method | Return | Time |
|---|---|---|
| Sell to distributor | 40–60% of purchase price | Immediate |
| Sell via classified ad | 50–70% | 2 weeks |
| Scrap for parts | 20% | Immediate |

---

## 7B. MACHINE CLASSIFICATIONS

Every machine in the classifieds — and every machine you ever own — belongs to one of four classifications. The classification is visible as a color on the listing border and on the stats card. Players learn to read the color before they read the ad.

### The Four Classifications

| Classification | Color | Rarity | What It Means |
|---|---|---|---|
| **Standard** | White | Always available | Regular pool. What's in the classifieds every week. The worn cabinet Ray wanted gone. |
| **Surplus** | Green | Occasional | Unusual find. Better than average. Shows up when conditions are right. |
| **Storied** | Blue | Rare — once per run if conditions met | Known machine. Has a history. People in the industry recognize the name. |
| **Unique** | Gold | Once per game universe | One exists. Has a name. Has a past. Arrives via handwritten ad. |

### The Descriptors

Descriptors appear in the ad copy and on the stats card. They explain *why* a machine has its classification — the backstory behind the listing.

| Descriptor | Lives In | Meaning |
|---|---|---|
| Floor Model | Standard / Surplus | Was a display unit. Never heavily played. Better condition than its age suggests. |
| Last Season | Standard | Last year's popular machine. Cheap now. Still has a tail. |
| Classic | Surplus / Storied | Established title. Proven track record. Patrons recognize it immediately. |
| Vintage | Storied / Unique | Pre-video game era or early generation. Appreciates over time. Only machine type that does. |
| Refurbished | Surplus | Beat up but professionally restored. Better than its condition suggests. |
| One Owner | Surplus / Storied | Came from one place. Clean history. No mystery maintenance problems. |
| Toured | Storied | Went through multiple arcades. Has regulars in other cities who'll travel for it. |
| Championship | Storied | Used in a real competitive event. Has the bracket marks to prove it. Tournament events automatic. |
| Import | Surplus / Storied | Never officially distributed locally. Unusual mechanic. Short novelty window, very long tail. |
| Prototype | Storied / Unique | Never went into production. You shouldn't have this. Nobody knows what genre it is until patrons play it. |

### How Classifications Appear In The Paper

**Standard listing** — normal ad, regular column, white border, BLAHBLAH filler around it.

**Surplus listing** — same newspaper, green-bordered box, slightly different seller voice. Noticeable but not screaming.

**Storied listing** — its own page when you flip. Yellower paper. One ad, centered. No other listings on the page. You know something is different before you read a word.

**Unique listing** — same as Storied but handwritten. Not typeset. Someone wrote this by hand and submitted it to the classifieds. That detail tells you everything.

### Rarity In The Pool

- Standard listings appear every page
- Surplus listings appear roughly 1 in every 8 pages flipped
- Storied listings appear at most once per run — only if conditions are met
- Unique listings appear at most once per run — only after specific criteria AND enough pages flipped that the universe decides you've been looking hard enough

Grinding the classifieds occasionally surfaces something extraordinary. The Tire Kicker achievement — flip 10 times in one session — is not always wasted.

### Example Listings By Classification

**Standard / Last Season**
```
FOR SALE: TURBO CIRCUIT cabinet.
Steering wheel. Good condition.
Upgrading to newer model.
$195. Call Mike. 555-0181
```

**Surplus / Floor Model**
```
FLOOR MODEL: COAST RUNNER cabinet.
Steering wheel. Showroom condition.
Distributor clearing display stock.
$290 firm. Western Dist. Co. 555-0144
```

**Storied / Championship**
```
CHAMPIONSHIP CABINET: IRON FIST.
Used in the 1989 Regional Finals.
Bracket still taped inside the coin door.
Serious inquiries only. $580.
Call Dennis. 555-0163
```

**Unique**
```
[handwritten]
Heard you collect these.
This one's been waiting.
No price listed. Come see it.
— R.
```

### Specific Notable Machines

These are named machines with fixed histories that can appear in runs under specific conditions. All arrive via the classifieds.

**Surplus / Storied Pool**
- *The Workhorse* — A fighter that's been in three different arcades. Barely Working condition but pre-built cult following. Patrons who played it elsewhere recognize it and immediately queue.
- *The Import* — A Japanese shooter. Mechanic no one has seen locally. Short novelty window, longest tail of any shooter.
- *The Prototype* — Never went into production. Unknown genre until patrons play it.
- *The Championship Cabinet* — Tournament fighter. Bracket still inside. Tournament events automatic — no bracket board upgrade needed.
- *The Boardwalk King* — Sit-down racer from a pier. Salt damage on cabinet, pristine screen. Seasonal nostalgia premium — peaks every summer.
- *The Last One* — Final unit of a discontinued machine. Mint condition. Appreciates every year. Rival offer jumps if you own it.
- *Two Pinball + Vintage Unlock* — Own two pinball machines of sufficient quality simultaneously and a Vintage table appears in the pool. Pre-video game era, purely mechanical, different patron type entirely. Anchor of the Indie Pinball ending.

**Unique Pool**
- *RAY'S ORIGINAL* — The machine from the opening ad. Sold or scrapped it early + reach reputation threshold = Ray's handwritten ad appears. No specs. Just: *"I heard you've been doing well. I still have the receipt. — Ray"*
- *THE WIDOWMAKER* — Notorious punishing fighter. Documented trail of broken joysticks. Word of mouth is massive. Controversy risk is permanent. Arrives during The Boom if you have a fighter on your floor.
- *CABINET ZERO* — First arcade cabinet ever placed in your city. Storage unit for 15 years. Whoever owns it when the run ends gets a special ending variant regardless of location tier. Appears after 10 completed runs.

### Unlock Conditions

| Machine | Condition to Appear |
|---|---|
| The Workhorse | Any machine at Barely Working condition survives 1+ year |
| The Import | Own a shooter for 2+ years |
| The Prototype | Flip classifieds 5+ times in one session |
| The Championship Cabinet | Host a tournament event |
| The Boardwalk King | Reach the Boardwalk location |
| The Last One | Reach any Tier 1 ending in a previous run |
| Vintage Pinball Table | Own 2+ pinball machines simultaneously |
| Ray's Original | Sold or scrapped starting machine + reach reputation threshold |
| The Widowmaker | Own a fighter during The Boom era |
| Cabinet Zero | Complete 10 total runs |

---

## 8. MACHINE UPGRADES

Upgrades are bolted onto specific machines. Each is visible on the iso floor — the machine physically changes. Four tiers.

### Tier 1 — Early Game (Weeks 1–8)
| Upgrade | Effect |
|---|---|
| Continue Credits | Players insert another quarter instead of game over. Extends revenue tail. |
| High Score Initials | 3-letter entry. Creates competition, loyalty, return visits. |
| Speaker Upgrade | Draws patrons from across the floor. |
| Joystick Upgrade Kit | Reduces control wear events. |
| Coin Mechanism Upgrade | Reduces coin jam events. |
| Plexi Screen Guard | Reduces screen damage events. |

### Tier 2 — Mid Game (Months 3–6)
| Upgrade | Effect | Restriction |
|---|---|---|
| 2P Kit | Second control panel. Doubles potential revenue. Cabinet widens. | Fighter, Shooter, Racer |
| Force Feedback Steering Wheel | Patrons feel the road. Highest novelty bump of any upgrade. | Racer |
| Screen Upgrade | Better spectator visibility. Crowds gather more easily. | All |
| Marquee Light Upgrade | Neon marquee. Contributes to street foot traffic. | All |
| Subwoofer Cabinet | Physical bass. "Feel it in your chest" event possible. | All |
| Haptic Flipper Handles | Loyalty boost for pinball regulars. | Pinball |
| Tournament Bracket Board | Enables tournament events. Changes patron behavior. | Fighter, Sports |

### Tier 3 — Late Game (Year 2+)
| Upgrade | Effect | Restriction |
|---|---|---|
| 4P Kit | Massive footprint. Creates spectacle. | Fighter, Sports |
| Sit-Down Cockpit Conversion | Full sit-down cabinet. Creates spectator queues. | Racer |
| Hydraulic Motion Platform | The machine moves. Only upgrade generating spectator revenue. | Racer |
| Leaderboard Display | Wall-mounted live scores. Amplifies competition across floor. | All |
| Side-by-Side Mirror Cabinet | Linked competitive cabinets. Rivalry events. | Fighter, Shooter |
| Token System Conversion | Branded tokens. Locks spending into your arcade. | All |
| Headphone Jack | Unlocks Focused Loner patron type. Stays twice as long. | All |

### Tier 4 — Rare / Special (Unlock or Event-Triggered)
| Upgrade | How to Get | Effect |
|---|---|---|
| Prototype Board Swap | Event card offer | Modified logic board. Cult potential. Health code risk. |
| Backlit Side Art | Reach any Tier 1 ending | Lit art panels. Pure prestige. |
| VS Marquee | Win a tournament | Flashing competitive display. |
| Custom Cabinet Paint | Achievement unlock | Changes cabinet color scheme. |

### Notable Interactions
- **Continue Credits + Punishing Difficulty** — Fast credit burn becomes a revenue engine. Players pay to not lose.
- **Force Feedback + Sit-Down Cockpit** — Stack both on a Racer. Most immersive machine possible. Long queues.
- **Hydraulic Motion Platform** — Only upgrade generating revenue from non-players. A rising tide.
- **Prototype Board Swap** — The most interesting upgrade. Slightly shady. Cult following. Real consequences.

---

## 9. OPERATIONAL PURCHASES & SOFT MECHANICS

Three categories of non-machine purchases.

### Category 1 — Operational
*Directly affects revenue, compliance, or survival.*

| Item | Effect | Availability |
|---|---|---|
| Change Machine | **First purchase priority.** Without it patrons can't convert bills to quarters and revenue stalls. Converts collected coins into patron-ready quarters — the critical link between cabinet revenue and continued play. Raid it to fund a classifieds page flip, but drain it and the floor goes quiet. | Garage+ |
| ATM | Raises spending ceiling. Patrons stay longer. | Storefront+ |
| Cash Register / Safe | Reduces theft events. | Storefront+ |
| Coin Counter | Reduces end-of-week accounting losses. | Garage+ |
| Restroom | Required for certain tier upgrades. Longer patron stays. | Mall+ |
| Air Conditioning | Summer comfort. Patron penalty without it. | Storefront+ |
| Security Camera | Reduces theft and vandalism. | Storefront+ |
| Exterior Neon Sign | Increases street foot traffic conversion. | Storefront+ |
| Phone Line | Required for tournaments and some event cards. | Garage+ |
| Payphone (wall-mounted) | **Must be purchased before you can buy additional machines.** Opens the classifieds screen via the payphone cutaway. Also generates small passive revenue — patrons use it. Scales with foot traffic. Moves with you to every location, changing skin each time. The most important early purchase after the change machine. | Garage+ |

### Category 2 — Soft Mechanical
*Aesthetic purchases with real indirect effects.*

| Item | Effect |
|---|---|
| Old Sofa (starting item) | Medium dwell time boost |
| Decent Couch | Better dwell time |
| Nice Sectional | Significant dwell time. Unlocks lounge crowd patron type. |
| Bar Stools | Pairs with bar tables. Enables standing-around culture. |
| Bar Top Tables (starting item) | Medium dwell boost |
| Better Lighting | Foot traffic conversion + patron mood |
| Carpet Upgrade | Patron mood. Reduces noise complaints. |
| Bulletin Board | Enables community events. Small loyalty boost. |
| High Score Display (wall) | Popularity boost. Patron competition behavior. |
| Trophy Case | Unlocks tournament events. | 

### Category 3 — Pure Cosmetic
*Player expression. Earned through achievements, not purchased with money.*

- Wall paint colors
- Floor carpet patterns
- Ceiling tiles and trim
- Fake arcade game posters (poster wall unlocks)
- Custom marquee fonts
- Neon sign colors and styles
- Plants, clocks, lava lamps, seasonal decorations
- Patron sprite costumes
- Staff sprites

**Cosmetics are biography, not budget.** They unlock via achievements and endings. Your arcade looks the way it does because of what you've survived.

---

## 10. DECAY, EVENTS & THE RIVAL

### The Popularity Curve
Every machine follows the same arc: novelty → growth → peak → decay. The shape of the curve is determined by genre, mechanic, difficulty, and upgrades. Your job is to read where each machine is and act accordingly.

### Decay Events
Decay happens as gut-punch events, not slow erosion:
- A newer machine opens across town
- A kid figures out the cheat code and word spreads
- Cabinet breaks down on a Saturday night
- A bad review in the local paper
- The rival makes a move

Every event is a decision moment. You have to physically get there and act.

### Event Indicators
| Icon | Color | Meaning |
|---|---|---|
| ! | Pink | Machine broken |
| ¢ | Yellow | Coin jam |
| $ | Orange | Change machine empty |
| ★ | Gold | VIP patron — intercept now |
| ‼ | Red | Rowdy patron |

### The Coin Collection Loop

Coins accumulate in each cabinet's tray as patrons play. You physically collect them by walking to the cabinet and pressing Z. Those coins go into your pocket as spendable revenue.

The change machine converts your collected coins into patron-ready quarters. Walk your coins to the change machine and deposit them to keep the floor running. If the change machine runs dry, patrons arrive, find no quarters, and leave.

Each cabinet has a **coin tray indicator** on its front face — visible at a glance from across the floor:
- **Green** — tray empty, machine accepting coins normally
- **Yellow** — tray filling, collect soon
- **Red** — tray full, machine has stopped accepting coins

The change machine has a **stock meter** on its side showing current quarter supply.

Early game with one machine this is simple. Four machines in a busy storefront and you're running laps — collecting from machine 2 while machine 4's tray fills, the change machine is getting low, and machine 1 has a coin jam flashing at you. You are the physical link in the chain. You can only be in one place at a time.

### The Rival
One named rival. Personal. They don't just compete — they make offers.

The offer climbs as your valuation grows, peaks, then starts to slip. At the peak:
```
RIVAL HAS MADE THEIR BEST OFFER.
[ACCEPT]  [DECLINE]
```
Take it clean = celebratory ending. Hold too long = lowball. Hold even longer = they outlast you.

Accepting a rival sub-lease during a location transition locks out the Indie Pinball, Standalone Arcade, and Barcade endings for that run.

---

## 11. DIFFICULTY, CONDITION & UNLOCK PROGRESSION

### The Principle
The starting machine is **always Worn** — a used cabinet from a classified ad. No draw, no unlock, no exception. It works fine but has a maintenance clock running from day one. You can always buy another machine during the run, so the starting draw is never a death sentence. Every player starts on equal footing.

Difficulty is fixed at Escalating for new players and unlocks through progression. By the time a harsher difficulty enters the pool, the player has earned the skill to handle it.

### Condition for Purchased Machines
Condition applies to machines you *buy during the run*. As you unlock new sources and progress further, better (and worse) conditions become available.

| Condition | How to Get | Effect |
|---|---|---|
| **Worn** | Always — classified ads | Baseline. Occasional maintenance. |
| **Good** | Distributor catalog (unlocks at Storefront) | Fewer breakdowns. Higher cost. |
| **Mint** | Reach any Tier 1 ending — unlocks in catalog | No breakdowns first season. Premium aura. |
| **Damaged** | Complete 10 runs — appears in classified ads | Frequent breakdowns. Cheap. High risk. |
| **Barely Working** | Reach Indie Pinball ending — event card only | Cult of the broken machine potential. |

### Difficulty Unlock Track
| Difficulty | Unlock Condition | Effect |
|---|---|---|
| **Escalating** | Always | Starts easy, ramps. Teaches the arc. |
| **Fair** | Survive 3 years in any run | Best word of mouth. Steady. |
| **Easy** | Go bankrupt once | Long sessions. Low revenue. You learned. |
| **Punishing** | Beat any mini-game on hard | Fast credit burn. High ceiling. Short tail. |
| **Random** | Complete all 22 endings | Chaos mode. Pure variance. |

### Ending Unlocks
Each completed run (win or lose) unlocks new entries into the starting pool:

| Milestone | Unlock |
|---|---|
| Survive 3 years | Puzzle genre enters pool |
| Reach any Tier 2 ending | Trackball mechanic enters pool |
| Go bankrupt | Easy difficulty enters pool |
| Reach Indie Pinball ending | Pinball enters starting genre pool |
| Earn "First Listing" achievement | Opening classified ad shows 3 listings |
| Complete all 22 endings | Full pool unlocked |

### Meta Progression — Tools
Tools upgraded in previous runs carry a shadow into the next run. Not full power — a head start. The wrench is a little faster. The cash roll holds a little more. The arcade always burns. The owner gets better.

---

## 12. MINI-GAMES

Every cabinet on your floor is a playable arcade game.

### Access
Walk up to a cabinet after hours → press Z → mini-game launches full screen. The floor goes dark. A single spotlight on the cabinet. No revenue impact. No queue disruption.

### Inheritance
The mini-game inherits the machine's characteristics:
- Difficulty Curve affects AI and pacing
- Cabinet Condition causes screen flicker on Worn machines
- Cost Per Play sets starting lives (1 quarter = 3 lives, 2 quarters = 2 lives)

### The Three Starting Mini-Games

**FIGHTER** — 1v1. Health bars. Three rounds. Z=punch, X=kick, arrows=move/block.
**RACER** — Pseudo-3D forward-scroll. Steer, avoid traffic, three laps.
**SHOOTER** — Top-down wave shooter. Five waves plus a boss.

### Pinball Mini-Game — Unlocked
Pinball is not a starting mini-game. It becomes playable only after acquiring a pinball machine mid-run. Full playfield — flippers, bumpers, targets, multiball. The most complex mini-game to build and the most satisfying to beat. Beating it is required to reach the Indie Pinball Arcade ending.

### Mini-Game Unlocks
| Achievement | Unlock |
|---|---|
| Beat Fighter | Competitive patron type enters spawn pool |
| Beat Fighter on hard | 2P Fighter pass-and-play unlocked |
| Beat Racer under par | Patron movement speed upgrade purchasable |
| Beat Shooter all waves | New poster unlocks on poster wall |
| High score on any game | Unique cabinet skin for that genre |
| Beat all 3 starting games (Fighter, Racer, Shooter) | "Arcade Champion" achievement + patron costume |
| Beat the pinball mini-game | "Silver Ball" achievement + pinball cabinet skin |
| Beat any game first try | "Natural" achievement |
| Lose all lives on screen 1 | "Humbling" achievement (still unlocks something) |

---

## 13. ACHIEVEMENTS & BADGES

### Ending-Based Achievements
Reach each of the 22 endings. Each unlocks cosmetics and new starting pool entries.

### Playstyle Achievements

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
- Never add a single upgrade — *"Pure"*
- Stack every upgrade on one machine — *"Frankenstein"*
- Only ever own one machine — *"Minimalist"*

**Classified Ads**
- Reach Tier 1 without flipping the classifieds page once all run — *"First Listing"* — unlocks 3 starting listings on all future runs
- Flip the page 10 times on a single purchase — *"Tire Kicker"*
- Buy a second machine before week 4 — *"The Early Bird"*
- Buy every machine from page 1 listings across an entire run — *"No Hesitation"*
- Reach a Tier 1 ending having raided the change machine at least once — *"Bootstrapped"*
- Complete a full run never raiding the change machine — *"Dignity"*

**Meta**
- Reach all 22 endings — *"I've Seen Everything"*
- Name your arcade the same thing 10 runs in a row

### Badge: ONE FOR THE AGES
**Condition:** Reach any Tier 1 ending using only the starting machine. No second machine. No replacements. Same cabinet from the classified ad in week 1 to closing night.

Genre variants: Fighter (red), Racer (blue), Shooter (green), Pinball (gold — hardest).

The Pinball variant is the prestige badge. One machine. Ten years. Nothing else.

### Badge: STOCK
**Condition:** Reach any Tier 1 ending with the starting machine and zero upgrades purchased.

Badge art: a battered cabinet with tape over a crack. Still glowing.

### The Unnamed Achievement
One for the Ages + Pinball + Stock + Indie Pinball ending.

No name. No achievement screen. The players who do it will know.

---

## 14. AESTHETIC & PLATFORM

**Visual:** SEGA Genesis — dark palette, neon-on-black, chunky pixels, isometric projection
**Audio:** FM synthesis via Web Audio API. Each cabinet has a generated chiptune. The audio is the popularity meter.
**Font:** Press Start 2P throughout
**UI:** Genesis RPG menus — bordered dialogue boxes, cursor click, zero friction on restart
**Platform:** Browser, single HTML file
**Canvas:** 640×480

### The Garage (Level 1)
- Left wall: open roll-up garage door. Night sky outside. Driveway in concrete (#D2D1CD) visible through opening.
- Right wall: fake arcade game posters. Locked posters show COMING SOON.
- Floor: dark purple checkerboard carpet
- Furniture: old sofa, two bar-top tables
- Ceiling: warm strip lighting above poster wall
- Starting purchases needed: change machine, then payphone — nothing operational is free

---

## 15. BUILD ORDER

- [x] Title screen
- [x] Name entry
- [x] Isometric garage floor
- [x] Patron AI and queue system
- [x] Owner character with WASD movement
- [x] Interaction system (Z to act)
- [x] Event indicators
- [x] Starting cash ($85)
- [x] Change machine object
- [ ] Classified ad intro screen
- [ ] Machine stats card
- [ ] Random machine draw (genre/mechanic/players/cost)
- [ ] Popularity curve and decay
- [ ] First event card
- [ ] Purchase menu (change machine, upgrades)
- [ ] Second machine acquisition
- [ ] Location transition cards
- [ ] Mini-game: Fighter
- [ ] Mini-game: Racer
- [ ] Mini-game: Shooter
- [ ] Mini-game: Pinball (unlock — requires pinball machine acquisition)
- [ ] Rival system and offer mechanic
- [ ] Ending screens
- [ ] Sound — FM chiptunes
- [ ] Meta progression and unlocks

---

## 16. STATUS

> Active development. Core loop playable. Design document complete.
> Current build: v0.6 — YOU ARE IN THE ROOM

---

*Quarter Drain is a game about arcades made to feel like one.*
