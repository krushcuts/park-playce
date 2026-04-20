// ============================================================
//  systems/coins.js — Coin particle system
// ============================================================

const coins = [];

function spawnCoin(sx, sy) {
  coins.push({
    x: sx, y: sy,
    vx: (Math.random() - 0.5) * 1.6,
    vy: -2 - Math.random() * 0.8,
    life: 55, max: 55,
  });
}

function tickCoins() {
  for (let i = coins.length - 1; i >= 0; i--) {
    const c = coins[i];
    c.x += c.vx; c.y += c.vy; c.vy += 0.09;
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
