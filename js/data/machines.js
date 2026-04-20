// ============================================================
//  data/machines.js — Machine definitions, name pools, posters
// ============================================================

// Current active machine (will be drawn randomly at run start)
const MACHINE = {
  name:           'IRON FIST',
  genre:          'FIGHTER',
  mechanic:       'DUAL JOYSTICK',
  players:        2,
  revenuePerPlay: 0.50,
};

// Patron sprite colours
const PCOLORS = [
  '#ff6b6b','#ffd93d','#6bcb77','#4d96ff',
  '#ff922b','#cc5de8','#f06595','#63e6be',
];

// Interactable objects on the floor
const INTERACTABLES = [
  {
    id: 'cabinet', label: 'IRON FIST', icon: '!',
    wx: 4.5, wy: 2.5, radius: 1.4,
    state: 'OK',
    prompt: '[Z] INSPECT',
  },
  {
    id: 'change_machine', label: 'CHANGE MACHINE', icon: '$',
    wx: 1.2, wy: 1.8, radius: 1.2,
    state: 'OK',
    prompt: '[Z] RESTOCK',
  },
  {
    id: 'door', label: 'DOOR', icon: '🚪',
    wx: 4.0, wy: 0.15, radius: 1.1,
    state: 'OPEN',
    prompt: '[Z] CLOSE DOOR',
  },
];

// Poster wall data
const POSTERS = [
  { title:'BLASTER', sub:'FORCE',   bg:'#1a0008', accent:'#ff006e', icon:'ship',    unlocked: true  },
  { title:'TURBO',   sub:'SMASH',   bg:'#001a08', accent:'#00ff9f', icon:'fist',    unlocked: true  },
  { title:'NEON',    sub:'KNIGHTS', bg:'#00081a', accent:'#00e5ff', icon:'sword',   unlocked: true  },
  { title:'HYPER',   sub:'ZONE',    bg:'#1a1000', accent:'#ffd600', icon:'diamond', unlocked: false },
  { title:'GALAXY',  sub:'CRASH',   bg:'#0a001a', accent:'#cc44ff', icon:'planet',  unlocked: false },
  { title:'STREET',  sub:'BRAWLER', bg:'#1a0500', accent:'#ff6622', icon:'fist',    unlocked: false },
  { title:'CYBER',   sub:'RACER',   bg:'#001818', accent:'#00ffcc', icon:'car',     unlocked: false },
  { title:'DOOM',    sub:'MAZE',    bg:'#120012', accent:'#ff22ff', icon:'skull',   unlocked: false },
  { title:'IRON',    sub:'CLAW',    bg:'#181800', accent:'#ffee00', icon:'claw',    unlocked: false },
];

// Machine name pools by genre
const NAME_POOLS = {
  FIGHTER:  ['IRON FIST','BATTLE CLASH','STEEL KOMBAT','DEATH ROUND','FURY CAGE'],
  RACER:    ['TURBO CIRCUIT','SPEED DEMON','NITRO KING','APEX RUN','COAST RUNNER'],
  SHOOTER:  ['STELLAR FORCE','BLASTER ZONE','COSMIC RAID','NOVA STRIKE','AFTERBURN'],
  PINBALL:  ['SILVER BALL','TILT FEVER','PLUNGE','BUMPER KING'],
};

// Starting pool for new players
const STARTING_POOL = {
  genres:    ['FIGHTER', 'RACER', 'SHOOTER'],
  mechanics: ['DUAL JOYSTICK', 'STEERING WHEEL', 'LIGHT GUN'],
  players:   ['1P ONLY', '2P COMPETITIVE', '2P CO-OP'],
  cost:      [1, 2],
};

function drawRandomMachine() {
  const genre    = STARTING_POOL.genres[Math.floor(Math.random() * STARTING_POOL.genres.length)];
  const mechanic = STARTING_POOL.mechanics[Math.floor(Math.random() * STARTING_POOL.mechanics.length)];
  const players  = STARTING_POOL.players[Math.floor(Math.random() * STARTING_POOL.players.length)];
  const cost     = STARTING_POOL.cost[Math.floor(Math.random() * STARTING_POOL.cost.length)];
  const pool     = NAME_POOLS[genre] || NAME_POOLS.FIGHTER;
  const name     = pool[Math.floor(Math.random() * pool.length)];
  return { name, genre, mechanic, players, cost, revenuePerPlay: cost * 0.25 };
}
