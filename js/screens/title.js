// ============================================================
//  screens/title.js — Title screen
// ============================================================

function drawTitle() {
  const t = ++state.titleTick;
  ctx.fillStyle = C.bg; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(255,0,110,.07)'; ctx.lineWidth=1;
  for(let x=0;x<W;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

  const pulse = 0.75 + 0.25*Math.sin(t*0.045);
  ctx.save();
  ctx.textAlign='center'; ctx.shadowColor=C.pink; ctx.shadowBlur=28*pulse;
  ctx.fillStyle=C.pink; ctx.font='40px "Press Start 2P"';
  ctx.fillText('QUARTER',W/2,168); ctx.fillText('DRAIN',W/2,224);
  ctx.restore();

  ctx.fillStyle=C.cyan; ctx.font='7px "Press Start 2P"';
  ctx.textAlign='center'; ctx.fillText('A ROGUELIKE ARCADE EMPIRE',W/2,258);

  for(let i=0;i<5;i++){
    ctx.globalAlpha=.2; ctx.fillStyle=C.yellow;
    ctx.font='10px "Press Start 2P"'; ctx.textAlign='center';
    ctx.fillText('\xA2', 80+i*120, 420+Math.sin(t*.04+i*1.2)*5);
    ctx.globalAlpha=1;
  }

  if (Math.floor(t/28)%2===0) {
    ctx.fillStyle=C.yellow; ctx.font='10px "Press Start 2P"';
    ctx.textAlign='center'; ctx.fillText('PRESS ANY KEY',W/2,360);
  }

  ctx.fillStyle='rgba(255,255,255,.18)'; ctx.font='6px "Press Start 2P"';
  ctx.textAlign='center'; ctx.fillText('v0.7 \u2014 park-playce',W/2,H-16);
}
