// ============================================================
//  main.js — Game loop, screen router, update, draw
// ============================================================

function update() {
  // Cursor blink
  if (++state.cursorTick >= 28) { state.cursorTick = 0; state.cursorOn = !state.cursorOn; }

  if (state.screen !== 'GAME') return;

  updateOwner();

  // Spawn patrons
  state.spawnEvery = Math.max(60, 220 - state.popularity * 1.8);
  if (++state.spawnTick >= state.spawnEvery) {
    state.spawnTick = 0;
    const qFull = slots.queue.every(Boolean);
    const pFull = slots.play.slice(0, MACHINE.players).every(Boolean);
    if ((!qFull || !pFull) && state.patrons.length < 12) {
      state.patrons.push(new Patron());
    }
  }

  // Update patrons
  for (let i = state.patrons.length - 1; i >= 0; i--) {
    state.patrons[i].update();
    if (state.patrons[i].alpha <= 0) state.patrons.splice(i, 1);
  }

  // Money
  state.money = Math.floor(state.moneyF);

  // Week / year advance (~45 real seconds per game week)
  if (++state.weekTick >= 2700) {
    state.weekTick = 0;
    if (++state.week > 52) { state.week = 1; state.year++; }
  }

  tickCoins();
  tickFloats();
  updateHUD();
}

function draw() {
  ctx.clearRect(0,0,W,H);
  ctx.textBaseline = 'alphabetic';

  if      (state.screen === 'TITLE') drawTitle();
  else if (state.screen === 'NAME')  drawNameEntry();
  else if (state.screen === 'GAME')  drawGarage();
}

function updateHUD() {
  document.getElementById('hud-money').textContent = String(state.money).padStart(5,'0');
  document.getElementById('hud-pop').textContent   = state.popularity;
  document.getElementById('hud-date').textContent  = `WK ${state.week} \u2014 ${state.year}`;
}

function launchGame() {
  state.screen = 'GAME';
  document.getElementById('marquee').style.display    = 'block';
  document.getElementById('marquee-name').textContent = state.arcadeName;
  document.getElementById('hud').style.display        = 'flex';
  updateHUD();
}

// ── GAME LOOP ────────────────────────────────────────────────
(function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
})();
