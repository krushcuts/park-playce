// ============================================================
//  entities/owner.js — Owner character: movement, draw, interact
// ============================================================

function updateOwner() {
  const o = state.owner;
  let dx = 0, dy = 0;
  if (keys['ArrowLeft']  || keys['a'] || keys['A']) dx = -1;
  if (keys['ArrowRight'] || keys['d'] || keys['D']) dx =  1;
  if (keys['ArrowUp']    || keys['w'] || keys['W']) dy = -1;
  if (keys['ArrowDown']  || keys['s'] || keys['S']) dy =  1;

  if (dx !== 0 && dy !== 0) { dx *= 0.707; dy *= 0.707; }

  const nx = o.wx + dx * o.speed;
  const ny = o.wy + dy * o.speed;

  if (!isBlocked(nx, ny)) {
    o.wx = nx; o.wy = ny;
  } else {
    if (!isBlocked(nx, o.wy)) o.wx = nx;
    else if (!isBlocked(o.wx, ny)) o.wy = ny;
  }

  o.wx = Math.max(0.3, Math.min(COLS - 0.3, o.wx));
  o.wy = Math.max(0.3, Math.min(ROWS - 0.3, o.wy));

  if (Math.abs(dx) > Math.abs(dy)) o.facing = dx > 0 ? 'E' : 'W';
  else if (dy !== 0) o.facing = dy > 0 ? 'S' : 'N';

  if (dx !== 0 || dy !== 0) o.bobTick++;
  if (o.interactAnim > 0) o.interactAnim--;

  // Find nearest interactable
  let nearest = null, nearestD = 999;
  for (const obj of INTERACTABLES) {
    const d = Math.sqrt((o.wx - obj.wx) ** 2 + (o.wy - obj.wy) ** 2);
    if (d < obj.radius && d < nearestD) { nearest = obj; nearestD = d; }
  }
  state.nearestInteractable = nearest;
}

function isBlocked(wx, wy) {
  if (wx > CAB_TX + 0.1 && wx < CAB_TX + 0.9 && wy > CAB_TY + 0.1 && wy < CAB_TY + 0.9) return true;
  if (wx > 6.7 && wx < 8.1 && wy > 1.0 && wy < 1.7) return true;
  if (wx < 0.2 || wy < 0.2) return true;
  return false;
}

function doInteract(obj) {
  state.owner.interactAnim = 20;
  if (obj.id === 'cabinet') {
    if (obj.state === 'BROKEN') {
      obj.state = 'OK';
      showPrompt('FIXED!', obj.wx, obj.wy, C.green);
      state.moneyF += 5;
    } else if (obj.state === 'JAM') {
      obj.state = 'OK';
      showPrompt('JAM CLEARED', obj.wx, obj.wy, C.yellow);
      for (let i = 0; i < 4; i++) {
        const sp = iso(obj.wx, obj.wy, 0.4);
        spawnCoin(sp.x, sp.y);
      }
    } else {
      showPrompt('ALL GOOD', obj.wx, obj.wy, C.cyan);
    }
  }
  if (obj.id === 'change_machine') {
    showPrompt('+RESTOCKED', obj.wx, obj.wy, C.green);
  }
  if (obj.id === 'door') {
    obj.state = obj.state === 'OPEN' ? 'CLOSED' : 'OPEN';
    obj.prompt = obj.state === 'OPEN' ? '[Z] CLOSE DOOR' : '[Z] OPEN DOOR';
    showPrompt(obj.state, obj.wx, obj.wy, C.cyan);
  }
}

function drawOwner() {
  const o = state.owner;
  const sp = iso(o.wx, o.wy, 0);
  const px = Math.round(sp.x), py = Math.round(sp.y);
  const bob = Math.sin(o.bobTick * 0.22) * 1.5;
  const ia  = o.interactAnim;
  const lean = ia > 0 ? (ia > 10 ? -3 : 3) : 0;

  ctx.save();

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.beginPath(); ctx.ellipse(px, py+3, 12, 5, 0, 0, Math.PI*2); ctx.fill();

  // Shoes
  ctx.fillStyle = '#111';
  ctx.fillRect(px-6, py+8, 6, 5); ctx.fillRect(px+1, py+8, 6, 5);

  // Legs
  ctx.fillStyle = '#1a1a40';
  ctx.fillRect(px-5, py-1, 5, 10); ctx.fillRect(px+1, py-1, 5, 10);

  // Apron
  ctx.fillStyle = '#b8860b';
  ctx.fillRect(px-7, py-14, 15, 14);
  ctx.fillStyle = 'rgba(180,130,10,0.6)';
  ctx.fillRect(px-8, py-14, 2, 6); ctx.fillRect(px+7, py-14, 2, 6);

  // Body under apron
  ctx.fillStyle = '#2a2a4a';
  ctx.fillRect(px-5, py-14, 3, 14); ctx.fillRect(px+3, py-14, 3, 14);

  // Arms
  ctx.fillStyle = '#2a2a4a';
  if (ia > 0) {
    ctx.fillRect(px-10, py-16+lean, 4, 10);
    ctx.fillRect(px+7,  py-16-lean, 4, 10);
  } else {
    ctx.fillRect(px-10, py-13+Math.round(bob*0.5), 4, 10);
    ctx.fillRect(px+7,  py-13-Math.round(bob*0.5), 4, 10);
  }

  // Hands
  ctx.fillStyle = C.ownerSkin;
  ctx.fillRect(px-10, py-3+(ia>0?lean:Math.round(bob*0.5)), 4, 4);
  ctx.fillRect(px+7,  py-3+(ia>0?-lean:-Math.round(bob*0.5)), 4, 4);

  // Neck
  ctx.fillStyle = C.ownerSkin;
  ctx.fillRect(px-2, py-16, 5, 3);

  // Head
  ctx.fillStyle = C.ownerSkin;
  ctx.fillRect(px-6, py-27+Math.round(bob), 12, 12);

  // Hair
  ctx.fillStyle = '#1a1210';
  ctx.fillRect(px-6, py-27+Math.round(bob), 12, 5);

  // Eyes
  ctx.fillStyle = '#111';
  ctx.fillRect(px-4, py-22+Math.round(bob), 2, 2);
  ctx.fillRect(px+2, py-22+Math.round(bob), 2, 2);

  // Mouth
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillRect(px-1, py-17+Math.round(bob), 4, 1);

  // Name tag
  ctx.fillStyle = '#fff'; ctx.fillRect(px-4, py-12, 8, 4);
  ctx.fillStyle = '#333'; ctx.font = '3px "Press Start 2P"'; ctx.textAlign = 'center';
  ctx.fillText('YOU', px, py-10);

  // Interaction radius ring
  if (state.nearestInteractable) {
    ctx.strokeStyle = 'rgba(255,214,0,0.18)'; ctx.lineWidth = 1;
    ctx.setLineDash([3,4]);
    ctx.beginPath(); ctx.arc(px, py, 28, 0, Math.PI*2); ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();

  // Interaction prompt
  if (state.nearestInteractable) {
    const obj = state.nearestInteractable;
    const promptY = py - 35;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(px-52, promptY-12, 104, 16);
    ctx.strokeStyle = C.yellow; ctx.lineWidth = 1;
    ctx.strokeRect(px-52, promptY-12, 104, 16);
    ctx.fillStyle = C.yellow; ctx.font = '5px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText(obj.prompt, px, promptY);
    ctx.restore();
  }
}

// Event indicators above interactables
function drawEventIndicators() {
  for (const obj of INTERACTABLES) {
    if (obj.state === 'BROKEN' || obj.state === 'JAM' || obj.state === 'EMPTY') {
      const sp = iso(obj.wx, obj.wy, WH * 0.8);
      const pulse = 0.6 + 0.4 * Math.sin(Date.now() * 0.008);
      const col = obj.state === 'BROKEN' ? C.pink :
                  obj.state === 'JAM'    ? C.yellow : C.orange;
      ctx.save();
      ctx.globalAlpha = pulse;
      ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 10;
      ctx.font = '12px "Press Start 2P"'; ctx.textAlign = 'center';
      ctx.fillText(obj.state === 'BROKEN' ? '!' : obj.state === 'JAM' ? '\xA2' : '$', sp.x, sp.y);
      ctx.restore();
    }
  }
}

// Controls hint overlay
function drawControlsHint() {
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(8, H-36, 200, 28);
  ctx.strokeStyle = 'rgba(255,214,0,0.3)'; ctx.lineWidth = 1;
  ctx.strokeRect(8, H-36, 200, 28);
  ctx.fillStyle = 'rgba(255,214,0,0.7)'; ctx.font = '5px "Press Start 2P"'; ctx.textAlign = 'left';
  ctx.fillText('WASD/ARROWS: MOVE', 14, H-24);
  ctx.fillText('[Z]: INTERACT', 14, H-13);
  ctx.restore();
}
