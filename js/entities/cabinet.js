// ============================================================
//  entities/cabinet.js — Cabinet isometric draw
// ============================================================

function drawCabinet() {
  const tx = CAB_TX, ty = CAB_TY, h = CAB_H;
  const nB=iso(tx,  ty,  0), eB=iso(tx+1,ty,  0);
  const sB=iso(tx+1,ty+1,0), wB=iso(tx,  ty+1,0);
  const nT=iso(tx,  ty,  h), eT=iso(tx+1,ty,  h);
  const sT=iso(tx+1,ty+1,h), wT=iso(tx,  ty+1,h);

  // Floor shadow
  ctx.save(); ctx.globalAlpha = 0.4;
  poly([nB,eB,sB,wB], 'rgba(0,0,0,0.9)', null);
  ctx.restore();

  // East face
  poly([eT,sT,sB,eB], C.cabLeft,  'rgba(0,229,255,0.18)', 0.5);
  // South face (patron-facing)
  poly([wT,sT,sB,wB], C.cabFront, 'rgba(0,229,255,0.14)', 0.5);

  // Screen
  const sc0=iso(tx+0.12,ty+1,h*0.88), sc1=iso(tx+0.88,ty+1,h*0.88);
  const sc2=iso(tx+0.88,ty+1,h*0.46), sc3=iso(tx+0.12,ty+1,h*0.46);
  poly([sc0,sc1,sc2,sc3], C.cabScr, null);
  const flicker = 0.85 + 0.15 * Math.sin(Date.now() * 0.019);
  const smx = (sc0.x + sc1.x) / 2, smy = (sc0.y + sc2.y) / 2 + 2;
  ctx.save(); ctx.globalAlpha = flicker;
  ctx.fillStyle = C.green; ctx.shadowColor = C.green; ctx.shadowBlur = 6;
  ctx.font = '5px "Press Start 2P"'; ctx.textAlign = 'center';
  ctx.fillText(MACHINE.name.substring(0, 8), smx, smy - 4);
  ctx.fillText('INSERT\xA2', smx, smy + 5);
  ctx.restore();

  // Marquee
  const mq0=iso(tx+0.08,ty+1,h),     mq1=iso(tx+0.92,ty+1,h);
  const mq2=iso(tx+0.92,ty+1,h*0.92),mq3=iso(tx+0.08,ty+1,h*0.92);
  poly([mq0,mq1,mq2,mq3], '#0a0828', 'rgba(255,0,110,0.4)', 0.5);
  ctx.fillStyle = C.pink; ctx.shadowColor = C.pink; ctx.shadowBlur = 4;
  ctx.font = '4px "Press Start 2P"'; ctx.textAlign = 'center';
  ctx.fillText((state.arcadeName || '').substring(0, 7), (mq0.x+mq1.x)/2, (mq0.y+mq2.y)/2+1);
  ctx.shadowBlur = 0;

  // Control panel
  const cp0=iso(tx+0.08,ty+1,h*0.42), cp1=iso(tx+0.92,ty+1,h*0.42);
  const cp2=iso(tx+0.92,ty+1,h*0.12), cp3=iso(tx+0.08,ty+1,h*0.12);
  poly([cp0,cp1,cp2,cp3], '#0d0d28', 'rgba(0,229,255,0.18)', 0.5);
  const jx = cp0.x*0.72 + cp1.x*0.28, jy = (cp0.y + cp2.y)/2 + 1;
  ctx.fillStyle = '#333'; ctx.beginPath(); ctx.arc(jx,jy,3,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#666'; ctx.beginPath(); ctx.arc(jx,jy,1.5,0,Math.PI*2); ctx.fill();
  const bx = cp1.x*0.72 + cp0.x*0.28;
  [[C.pink,-4],[C.cyan,0],['#ff8800',4]].forEach(([col,dy]) => {
    ctx.fillStyle = col; ctx.beginPath(); ctx.arc(bx, jy+dy*0.5, 2, 0, Math.PI*2); ctx.fill();
  });
  const csx=(cp0.x+cp1.x)/2, csy=(cp0.y+cp2.y)/2;
  ctx.fillStyle='#000'; ctx.fillRect(csx-6,csy-1,12,3);
  ctx.fillStyle=C.yellow; ctx.fillRect(csx-4,csy-1,8,1);

  // Top face
  poly([nT,eT,sT,wT], C.cabTop, 'rgba(0,229,255,0.28)', 0.5);
  ctx.save(); ctx.globalAlpha = 0.2;
  const tg = ctx.createRadialGradient(nT.x,nT.y+8,1,nT.x,nT.y+8,28);
  tg.addColorStop(0,'#fff'); tg.addColorStop(1,'transparent');
  ctx.fillStyle = tg; poly([nT,eT,sT,wT],null,null); ctx.fill();
  ctx.restore();

  // Under-glow
  ctx.save(); ctx.globalAlpha = 0.12 + 0.04*Math.sin(Date.now()*0.003);
  const fg = ctx.createRadialGradient(smx,smy+20,2,smx,smy+20,55);
  fg.addColorStop(0, C.green); fg.addColorStop(1,'transparent');
  ctx.fillStyle = fg; ctx.fillRect(smx-60,smy,120,70);
  ctx.restore();
}

// Queue floor markers
function drawQueueMarkers() {
  const maxPlayers = MACHINE ? MACHINE.players : 2;
  const allSpots = [...PLAY_SPOTS.slice(0, maxPlayers), ...QUEUE_SPOTS];
  allSpots.forEach((s, i) => {
    const sp = iso(s.wx, s.wy, 0.01);
    ctx.save();
    ctx.globalAlpha = i < maxPlayers ? 0.22 : 0.12;
    ctx.strokeStyle = C.yellow; ctx.lineWidth = 0.75;
    const r = 5;
    ctx.beginPath();
    ctx.moveTo(sp.x,   sp.y-r*0.5);
    ctx.lineTo(sp.x+r, sp.y);
    ctx.lineTo(sp.x,   sp.y+r*0.5);
    ctx.lineTo(sp.x-r, sp.y);
    ctx.closePath(); ctx.stroke();
    ctx.restore();
  });
}
