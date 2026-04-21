// ============================================================
//  systems/coins.js — Coin particles + tray/change machine logic
// ============================================================

// ── COIN PARTICLES ───────────────────────────────────────────
const coins = [];

function spawnCoin(sx, sy) {
  coins.push({
    x: sx, y: sy,
    vx: (Math.random() - 0.5) * 1.8,
    vy: -2.2 - Math.random() * 1.0,
    life: 55, max: 55,
  });
}

function tickCoins() {
  for (let i = coins.length - 1; i >= 0; i--) {
    const c = coins[i];
    c.x += c.vx; c.y += c.vy; c.vy += 0.1;
    if (--c.life <= 0) coins.splice(i, 1);
  }
}

function drawCoins() {
  ctx.font = '8px "Press Start 2P"';
  ctx.textAlign = 'left';
  for (const c of coins) {
    ctx.save();
    ctx.globalAlpha = c.life / c.max;
    ctx.fillStyle = C.yellow;
    ctx.shadowColor = C.yellow; ctx.shadowBlur = 5;
    ctx.fillText('\xA2', Math.round(c.x), Math.round(c.y));
    ctx.restore();
  }
}

// ── TRAY LOGIC ────────────────────────────────────────────────
// Called by patron when they insert a quarter and play
function patronPlays() {
  if (!cabinetState.accepting) return false;
  if (!changeMachine.owned || changeMachine.stock <= 0) return false;

  // Patron uses a quarter from the change machine
  changeMachine.stock = Math.max(0, changeMachine.stock - 1);

  // Quarter lands in the tray
  cabinetState.tray = Math.min(cabinetState.trayMax, cabinetState.tray + 1);

  // Tray full — machine stops accepting
  if (cabinetState.tray >= cabinetState.trayMax) {
    cabinetState.accepting = false;
  }

  // Coin particle at cabinet screen
  const sp = iso(CAB_TX + 0.5, CAB_TY + 1, CAB_H * 0.6);
  spawnCoin(sp.x, sp.y);

  return true;
}

// Owner collects the tray (Z on cabinet)
function collectTray() {
  if (cabinetState.tray <= 0) {
    showPrompt('TRAY EMPTY', CAB_TX + 0.5, CAB_TY + 0.5, C.cyan);
    return;
  }
  const collected = cabinetState.tray;
  state.pocket += collected;
  cabinetState.tray = 0;
  cabinetState.accepting = true;

  // Burst of coin particles
  const sp = iso(CAB_TX + 0.5, CAB_TY + 1, CAB_H * 0.5);
  for (let i = 0; i < Math.min(collected, 8); i++) spawnCoin(sp.x, sp.y);

  showPrompt('+' + collected + '\xA2', CAB_TX + 0.5, CAB_TY + 0.5, C.yellow);
}

// Owner deposits pocket into change machine (Z on change machine)
function depositToChangeMachine() {
  if (!changeMachine.owned) {
    showPrompt('NOT OWNED', 1.2, 1.8, C.pink);
    return;
  }
  if (state.pocket <= 0) {
    showPrompt('EMPTY HANDS', 1.2, 1.8, C.cyan);
    return;
  }
  const space = changeMachine.stockMax - changeMachine.stock;
  const deposited = Math.min(state.pocket, space);
  changeMachine.stock += deposited;
  state.pocket -= deposited;
  state.moneyF += deposited * 0.25; // $0.25 per quarter

  // Coin particles at change machine
  const sp = iso(1.25, 1.75, 0.8);
  for (let i = 0; i < Math.min(deposited, 6); i++) spawnCoin(sp.x, sp.y);

  showPrompt('+$' + (deposited * 0.25).toFixed(2), 1.2, 1.8, C.green);
}

// ── TRAY INDICATOR ───────────────────────────────────────────
// Returns color based on fill level
function trayColor() {
  const pct = cabinetState.tray / cabinetState.trayMax;
  if (pct >= 1.0) return C.pink;   // full — red
  if (pct >= 0.6) return C.yellow; // filling — yellow
  return C.green;                   // ok — green
}

// ── CHANGE MACHINE INDICATOR ─────────────────────────────────
function changeMachineColor() {
  if (!changeMachine.owned) return '#333';
  const pct = changeMachine.stock / changeMachine.stockMax;
  if (pct <= 0)    return C.pink;
  if (pct <= 0.25) return C.orange;
  return C.green;
}
