// ============================================================
//  main.js — Game loop, screen router, update, draw
// ============================================================

function update() {
  if (++state.cursorTick >= 28) { state.cursorTick = 0; state.cursorOn = !state.cursorOn; }

  if (state.screen === 'GAME') {
    updateOwner();

    state.spawnEvery = Math.max(60, 220 - state.popularity * 1.8);
    if (++state.spawnTick >= state.spawnEvery) {
      state.spawnTick = 0;
      const qFull = slots.queue.every(Boolean);
      const pFull = slots.play.slice(0, MACHINE.players).every(Boolean);
      if ((!qFull || !pFull) && state.patrons.length < 12) {
        state.patrons.push(new Patron());
      }
    }

    for (let i = state.patrons.length - 1; i >= 0; i--) {
      state.patrons[i].update();
      if (state.patrons[i].alpha <= 0) state.patrons.splice(i, 1);
    }

    state.money = Math.floor(state.moneyF);

    if (++state.weekTick >= 2700) {
      state.weekTick = 0;
      if (++state.week > 52) { state.week = 1; state.year++; }
    }

    tickCoins();
    tickFloats();
    updateHUD();
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.textBaseline = 'alphabetic';

  switch (state.screen) {
    case 'TITLE': drawTitle();         break;
    case 'NAME':  drawNameEntry();     break;
    case 'AD':    drawClassifiedAd();  break;
    case 'GAME':  drawGarage();        break;
  }
}

function updateHUD() {
  document.getElementById('hud-money').textContent = '$' + state.money.toFixed(0).padStart(4,'0');
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

(function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
})();
