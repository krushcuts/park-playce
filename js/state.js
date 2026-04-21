// ============================================================
//  state.js — Single source of truth for all game state
// ============================================================

const state = {
  screen:       'TITLE',
  arcadeName:   '',
  cursorOn:     true,
  cursorTick:   0,
  money:        0,
  moneyF:       85,       // starting cash
  pocket:       0,        // coins collected from trays, not yet deposited
  week:         1,
  year:         1987,
  popularity:   30,
  patrons:      [],
  spawnTick:    0,
  spawnEvery:   160,
  titleTick:    0,
  weekTick:     0,
  nearestInteractable: null,
  owner: {
    wx: 2.5, wy: 3.5,
    speed: 0.055,
    facing: 'S',
    bobTick: 0,
    interactAnim: 0,
  },
};

// ── CABINET TRAY STATE ───────────────────────────────────────
// One entry per cabinet on the floor (currently just one)
const cabinetState = {
  tray:       0,        // coins in tray (0–20)
  trayMax:    20,       // plays before full
  accepting:  true,     // false when tray is full
};

// ── CHANGE MACHINE STATE ────────────────────────────────────
const changeMachine = {
  owned:      true,     // TODO: set false when purchase system is built
  stock:      40,       // pre-stocked for now
  stockMax:   40,       // Tier 1 capacity
  tier:       1,
};

// ── QUEUE / SLOT SYSTEM ─────────────────────────────────────
const CAB_TX = 4, CAB_TY = 2, CAB_H = 1.6;

const PLAY_SPOTS = [
  { wx: 4.18, wy: 3.28 },
  { wx: 4.82, wy: 3.28 },
];
const QUEUE_SPOTS = [
  { wx: 4.5, wy: 3.82 },
  { wx: 4.5, wy: 4.30 },
  { wx: 4.5, wy: 4.78 },
  { wx: 4.5, wy: 5.26 },
];

const slots = { play: [null, null], queue: [null, null, null, null] };

function assignSlot(p) {
  // No quarters = no play
  if (changeMachine.stock <= 0) return false;
  // Tray full = machine not accepting
  if (!cabinetState.accepting) return false;
  const maxPlayers = MACHINE ? MACHINE.players : 2;
  for (let i = 0; i < maxPlayers; i++) {
    if (!slots.play[i]) {
      slots.play[i] = p; p.slotType = 'play'; p.slotIdx = i;
      p.tx = PLAY_SPOTS[i].wx; p.ty = PLAY_SPOTS[i].wy;
      p.st = 'WALK_TO_SLOT'; return true;
    }
  }
  for (let i = 0; i < slots.queue.length; i++) {
    if (!slots.queue[i]) {
      slots.queue[i] = p; p.slotType = 'queue'; p.slotIdx = i;
      p.tx = QUEUE_SPOTS[i].wx; p.ty = QUEUE_SPOTS[i].wy;
      p.st = 'WALK_TO_SLOT'; return true;
    }
  }
  return false;
}

function releaseSlot(p) {
  if (p.slotType === 'play') {
    slots.play[p.slotIdx] = null;
    promoteQueue();
  } else {
    slots.queue[p.slotIdx] = null;
    compactQueue();
  }
  p.slotType = null; p.slotIdx = -1;
}

function promoteQueue() {
  const maxPlayers = MACHINE ? MACHINE.players : 2;
  for (let i = 0; i < slots.queue.length; i++) {
    const p = slots.queue[i]; if (!p) continue;
    for (let j = 0; j < maxPlayers; j++) {
      if (!slots.play[j]) {
        slots.queue[i] = null;
        slots.play[j] = p; p.slotType = 'play'; p.slotIdx = j;
        p.tx = PLAY_SPOTS[j].wx; p.ty = PLAY_SPOTS[j].wy;
        p.st = 'WALK_TO_SLOT';
        compactQueue(); return;
      }
    }
    break;
  }
}

function compactQueue() {
  const occ = slots.queue.filter(Boolean);
  slots.queue.fill(null);
  occ.forEach((p, i) => {
    slots.queue[i] = p; p.slotIdx = i;
    p.tx = QUEUE_SPOTS[i].wx; p.ty = QUEUE_SPOTS[i].wy;
    if (p.st === 'IN_SLOT') p.st = 'WALK_TO_SLOT';
  });
}

// ── FLOATING TEXT ───────────────────────────────────────────
const floatTexts = [];

function showPrompt(text, wx, wy, color) {
  const sp = iso(wx, wy, 0.8);
  floatTexts.push({ text, x: sp.x, y: sp.y, color, life: 60, max: 60 });
}

function tickFloats() {
  for (let i = floatTexts.length - 1; i >= 0; i--) {
    floatTexts[i].y -= 0.5;
    if (--floatTexts[i].life <= 0) floatTexts.splice(i, 1);
  }
}

function drawFloats() {
  ctx.font = '6px "Press Start 2P"'; ctx.textAlign = 'center';
  for (const f of floatTexts) {
    ctx.save();
    ctx.globalAlpha = f.life / f.max;
    ctx.fillStyle = f.color; ctx.shadowColor = f.color; ctx.shadowBlur = 6;
    ctx.fillText(f.text, Math.round(f.x), Math.round(f.y));
    ctx.restore();
  }
}
