// ============================================================
//  screens/nameEntry.js — Arcade name entry screen
// ============================================================

function drawNameEntry() {
  ctx.fillStyle=C.bg; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(0,229,255,.04)'; ctx.lineWidth=1;
  for(let x=0;x<W;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

  const px=70,py=130,pw=W-140,ph=220;
  ctx.fillStyle='#0d0825'; ctx.fillRect(px,py,pw,ph);
  ctx.strokeStyle=C.cyan; ctx.lineWidth=2; ctx.strokeRect(px,py,pw,ph);
  [[px,py],[px+pw,py],[px,py+ph],[px+pw,py+ph]].forEach(([cx,cy])=>{
    ctx.fillStyle=C.cyan; ctx.fillRect(cx-4,cy-4,8,8);
  });

  ctx.textAlign='center'; ctx.fillStyle=C.cyan; ctx.font='10px "Press Start 2P"';
  ctx.fillText('WHAT IS THE NAME',W/2,py+50);
  ctx.fillText('OF YOUR ARCADE?',W/2,py+72);

  const ix=px+30,iy=py+105,iw=pw-60;
  ctx.strokeStyle=C.yellow; ctx.lineWidth=1; ctx.strokeRect(ix,iy,iw,36);

  ctx.fillStyle=C.yellow; ctx.font='12px "Press Start 2P"'; ctx.textAlign='center';
  if (state.arcadeName.length===0) {
    ctx.fillStyle='rgba(255,214,0,.25)'; ctx.fillText('TYPE YOUR NAME...',W/2,iy+24);
  } else {
    ctx.fillText(state.arcadeName+(state.cursorOn?'_':' '),W/2,iy+24);
  }

  if (state.arcadeName.length>0 && state.cursorOn) {
    ctx.fillStyle=C.green; ctx.font='7px "Press Start 2P"';
    ctx.textAlign='center'; ctx.fillText('ENTER TO OPEN YOUR DOORS',W/2,py+188);
  }

  ctx.fillStyle='rgba(255,255,255,.18)'; ctx.font='6px "Press Start 2P"';
  ctx.textAlign='center'; ctx.fillText('1987. A GARAGE. ONE MACHINE. YOUR MOVE.',W/2,H-40);
}
