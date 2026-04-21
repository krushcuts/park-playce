// ============================================================
//  entities/patron.js — Patron class: AI, queue, draw
// ============================================================

function hairColorFor(bodyColor) {
  const hairs = ['#2c1810','#1a0f08','#4a3020','#8B6914','#2a2a2a','#c8a060','#1c1c1c'];
  return hairs[Math.abs(bodyColor.charCodeAt(1) + bodyColor.charCodeAt(2)) % hairs.length];
}

class Patron {
  constructor() {
    this.wx = 0.3 + Math.random() * 0.3;
    this.wy = 1.2 + Math.random() * (ROWS - 2.8);
    this.color = PCOLORS[Math.floor(Math.random() * PCOLORS.length)];
    this.hairColor = hairColorFor(this.color);
    this.speed = 0.022 + Math.random() * 0.016;
    this.tx = 1.0 + Math.random() * 1.5;
    this.ty = this.wy + (Math.random() - 0.5) * 0.5;
    this.st = 'ENTER';
    this.slotType = null; this.slotIdx = -1;
    this.playTick = 0;
    this.maxPlay  = 200 + rnd(0, 400);
    this.alpha    = 1;
    this.bob      = Math.random() * Math.PI * 2;
    this.entryDelay = rnd(20, 60);
    // How often this patron inserts a quarter (in ticks)
    this.insertEvery = 70 + rnd(0, 30);
  }

  update() {
    const dx = this.tx - this.wx, dy = this.ty - this.wy;
    const d  = Math.sqrt(dx * dx + dy * dy);
    if (d > 0.04) { this.wx += (dx / d) * this.speed; this.wy += (dy / d) * this.speed; }

    if (this.st === 'ENTER') {
      if (--this.entryDelay <= 0 || d < 0.12) {
        if (!assignSlot(this)) {
          // No slot or no change — leave
          this.st = 'LEAVING';
          this.tx = 0.25; this.ty = 1.2 + Math.random() * (ROWS - 2.8);
        }
      }
    }

    if (this.st === 'WALK_TO_SLOT' && d < 0.07) {
      this.st = 'IN_SLOT'; this.tx = this.wx; this.ty = this.wy;
    }

    if (this.st === 'IN_SLOT' && this.slotType === 'play') {
      this.playTick++;

      // Insert a quarter at regular intervals
      if (this.playTick % this.insertEvery === 0) {
        const played = patronPlays();
        if (!played) {
          // No change or tray full — give up and leave
          releaseSlot(this);
          this.st = 'LEAVING';
          this.tx = 0.25; this.ty = 1.2 + Math.random() * (ROWS - 2.8);
          return;
        }
      }

      // Done playing
      if (this.playTick >= this.maxPlay) {
        releaseSlot(this);
        this.st = 'LEAVING';
        this.tx = 0.25; this.ty = 1.2 + Math.random() * (ROWS - 2.8);
      }
    }

    if (this.st === 'LEAVING' && d < 0.12) this.alpha -= 0.035;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    const bobY = (this.st === 'IN_SLOT' && this.slotType === 'play')
      ? Math.sin(Date.now() * 0.008 + this.bob) * 1.8 : 0;
    const sp = iso(this.wx, this.wy, 0);
    const px = Math.round(sp.x), py = Math.round(sp.y + bobY);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath(); ctx.ellipse(px, py + 3, 10, 4, 0, 0, Math.PI * 2); ctx.fill();

    // Legs
    ctx.fillStyle = '#2a2a3a';
    ctx.fillRect(px - 4, py, 4, 10); ctx.fillRect(px + 1, py, 4, 10);

    // Shoes
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(px - 5, py + 7, 5, 4); ctx.fillRect(px + 1, py + 7, 5, 4);

    // Body
    ctx.fillStyle = this.color;
    ctx.fillRect(px - 6, py - 11, 13, 12);

    // Neck + Head
    ctx.fillStyle = C.ownerSkin;
    ctx.fillRect(px - 2, py - 13, 5, 3);
    ctx.fillRect(px - 5, py - 23, 10, 11);

    // Hair
    ctx.fillStyle = this.hairColor;
    ctx.fillRect(px - 5, py - 23, 10, 4);

    // Eyes + mouth
    ctx.fillStyle = '#111';
    ctx.fillRect(px - 3, py - 19, 2, 2); ctx.fillRect(px + 1, py - 19, 2, 2);
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(px - 1, py - 14, 3, 1);

    // Arms
    ctx.fillStyle = this.color;
    ctx.fillRect(px - 8, py - 10, 3, 8); ctx.fillRect(px + 6, py - 10, 3, 8);
    ctx.fillStyle = C.ownerSkin;
    ctx.fillRect(px - 8, py - 2, 3, 3); ctx.fillRect(px + 6, py - 2, 3, 3);

    // Playing note
    if (this.st === 'IN_SLOT' && this.slotType === 'play' && Math.floor(Date.now() / 320) % 2 === 0) {
      ctx.fillStyle = C.yellow; ctx.shadowColor = C.yellow; ctx.shadowBlur = 7;
      ctx.font = '8px "Press Start 2P"'; ctx.textAlign = 'center';
      ctx.fillText('\u266A', px, py - 27);
    }

    // Queue wait dot
    if (this.st === 'IN_SLOT' && this.slotType === 'queue') {
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      ctx.font = '6px "Press Start 2P"'; ctx.textAlign = 'center';
      ctx.fillText('...', px, py - 27);
    }

    ctx.restore();
  }
}
