// ============================================================
//  screens/garage.js — Garage floor, walls, furniture
// ============================================================

// ── FURNITURE ────────────────────────────────────────────────

function drawChangeMachine() {
  const wx=1.0, wy=1.5, h=1.1;
  const nB=iso(wx,  wy,  0), eB=iso(wx+.5,wy,  0), sB=iso(wx+.5,wy+.5,0), wB=iso(wx,  wy+.5,0);
  const nT=iso(wx,  wy,  h), eT=iso(wx+.5,wy,  h), sT=iso(wx+.5,wy+.5,h), wT=iso(wx,  wy+.5,h);
  ctx.save(); ctx.globalAlpha=.35; poly([nB,eB,sB,wB],'rgba(0,0,0,.8)',null); ctx.restore();
  poly([eT,sT,sB,eB],'#1a2a1a','rgba(0,255,100,.15)',.5);
  poly([wT,sT,sB,wB],'#152015','rgba(0,255,100,.1)',.5);
  poly([nT,eT,sT,wT],'#1e301e','rgba(0,255,100,.2)',.5);
  const smx=(iso(wx+.1,wy+.5,h*.7).x+iso(wx+.4,wy+.5,h*.7).x)/2;
  const smy=(iso(wx+.1,wy+.5,h*.7).y+iso(wx+.1,wy+.5,h*.3).y)/2;
  ctx.fillStyle=C.green; ctx.shadowColor=C.green; ctx.shadowBlur=4;
  ctx.font='6px "Press Start 2P"'; ctx.textAlign='center'; ctx.fillText('$',smx,smy+2);
  ctx.shadowBlur=0;
  ctx.fillStyle='rgba(0,255,100,.4)'; ctx.font='3px "Press Start 2P"';
  ctx.fillText('CHANGE',smx,smy+9);
}

function drawBarTable(wx, wy) {
  const tH=.75, tR=.28;
  const base=iso(wx,wy,0);
  ctx.save(); ctx.globalAlpha=.28; ctx.fillStyle='rgba(0,0,0,.7)';
  ctx.beginPath(); ctx.ellipse(base.x,base.y+2,12,5,0,0,Math.PI*2); ctx.fill(); ctx.restore();
  ctx.strokeStyle=C.tableLeg; ctx.lineWidth=2;
  const l1a=iso(wx-.08,wy+.08,0),l1b=iso(wx-.08,wy+.08,tH-.05);
  const l2a=iso(wx+.08,wy-.08,0),l2b=iso(wx+.08,wy-.08,tH-.05);
  ctx.beginPath(); ctx.moveTo(l1a.x,l1a.y); ctx.lineTo(l1b.x,l1b.y); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(l2a.x,l2a.y); ctx.lineTo(l2b.x,l2b.y); ctx.stroke();
  const tn=iso(wx-tR,wy,tH),te=iso(wx,wy-tR,tH),ts=iso(wx+tR,wy,tH),tw=iso(wx,wy+tR,tH);
  poly([tn,te,ts,tw],C.tableTop,null); poly([tn,te,ts,tw],null,'rgba(160,110,40,.4)',.75);
}

function drawSofa(wx, wy) {
  const W_=1.4,D_=.55,SH=.32,BH=.52,AW=.18;
  ctx.save(); ctx.globalAlpha=.35;
  poly([iso(wx,wy,0),iso(wx+W_,wy,0),iso(wx+W_,wy+D_,0),iso(wx,wy+D_,0)],'rgba(0,0,0,.7)',null);
  ctx.restore();
  poly([iso(wx,wy,BH),iso(wx+W_,wy,BH),iso(wx+W_,wy+.12,BH),iso(wx,wy+.12,BH)],C.sofaLight,'rgba(0,0,0,.2)',.5);
  poly([iso(wx,wy+D_,SH),iso(wx+W_,wy+D_,SH),iso(wx+W_,wy+D_,0),iso(wx,wy+D_,0)],C.sofaMain,'rgba(0,0,0,.15)',.5);
  poly([iso(wx+W_,wy+.12,SH),iso(wx+W_,wy+D_,SH),iso(wx+W_,wy+D_,0),iso(wx+W_,wy+.12,0)],C.sofaDark,null);
  poly([iso(wx,wy+.12,SH),iso(wx+W_,wy+.12,SH),iso(wx+W_,wy+D_,SH),iso(wx,wy+D_,SH)],C.sofaCushion,'rgba(0,0,0,.12)',.5);
  const mid_n=iso(wx+W_/2,wy+.12,SH),mid_s=iso(wx+W_/2,wy+D_,SH);
  ctx.save(); ctx.strokeStyle='rgba(0,0,0,.25)'; ctx.lineWidth=.75;
  ctx.beginPath(); ctx.moveTo(mid_n.x,mid_n.y); ctx.lineTo(mid_s.x,mid_s.y); ctx.stroke(); ctx.restore();
  for(let i=0;i<2;i++){const bp=iso(wx+W_*.25+i*W_*.5,wy+D_*.6,SH+.01);ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.arc(bp.x,bp.y,1.5,0,Math.PI*2);ctx.fill();}
}

// ── FLOOR ────────────────────────────────────────────────────
function drawFloor() {
  for (let ty=0; ty<ROWS; ty++) for (let tx=0; tx<COLS; tx++)
    poly([iso(tx,ty),iso(tx+1,ty),iso(tx+1,ty+1),iso(tx,ty+1)],
         (tx+ty)%2===0 ? C.floorA : C.floorB, C.floorEdge, 0.5);
  ctx.save(); ctx.strokeStyle='rgba(255,0,110,.22)'; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.moveTo(iso(0,ROWS).x,iso(0,ROWS).y); ctx.lineTo(iso(COLS,ROWS).x,iso(COLS,ROWS).y); ctx.stroke(); ctx.restore();
}

// ── DRIVEWAY ─────────────────────────────────────────────────
function drawDriveway() {
  for (let wx=-3; wx<0; wx++) for (let ty=0; ty<ROWS; ty++) {
    const shade=(Math.abs(wx)+ty)%2===0 ? C.driveA : C.driveB;
    poly([iso(wx,ty),iso(wx+1,ty),iso(wx+1,ty+1),iso(wx,ty+1)],shade,C.driveEdge,.5);
  }
  ctx.save(); ctx.strokeStyle='rgba(180,160,80,.25)'; ctx.lineWidth=1.5; ctx.setLineDash([4,6]);
  ctx.beginPath(); ctx.moveTo(iso(-3,0).x,iso(-3,0).y); ctx.lineTo(iso(-3,ROWS).x,iso(-3,ROWS).y); ctx.stroke();
  ctx.setLineDash([]); ctx.restore();
}

// ── GARAGE WALL (left — roll-up door) ────────────────────────
function drawGarageWall() {
  const ROLL = 0.28;
  for (let ty=0; ty<ROWS; ty++) {
    const tl=iso(0,ty,WH),tr=iso(0,ty+1,WH),bl=iso(0,ty,0),br=iso(0,ty+1,0);
    const rl_bl={x:tl.x+(bl.x-tl.x)*ROLL,y:tl.y+(bl.y-tl.y)*ROLL};
    const rl_br={x:tr.x+(br.x-tr.x)*ROLL,y:tr.y+(br.y-tr.y)*ROLL};
    withClip([tl,tr,rl_br,rl_bl],()=>{
      poly([tl,tr,rl_br,rl_bl],C.garageMetal,null);
      for(let s=0;s<=5;s++){
        const f=s/5;
        ctx.strokeStyle=s%2===0?'#2e2e50':'#111128'; ctx.lineWidth=s%2===0?1.5:.75;
        ctx.beginPath(); ctx.moveTo(tl.x+(rl_bl.x-tl.x)*f,tl.y+(rl_bl.y-tl.y)*f);
        ctx.lineTo(tr.x+(rl_br.x-tr.x)*f,tr.y+(rl_br.y-tr.y)*f); ctx.stroke();
      }
      ctx.strokeStyle='#3a3a60'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(rl_bl.x,rl_bl.y); ctx.lineTo(rl_br.x,rl_br.y); ctx.stroke();
    });
  }
  for(let ty=0;ty<ROWS;ty++){
    const tl=iso(0,ty,WH),tr=iso(0,ty+1,WH);
    poly([tl,tr,{x:tr.x-(TW/2)*.1,y:tr.y-4},{x:tl.x-(TW/2)*.1,y:tl.y-4}],C.wallCap,null);
  }
}

// ── POSTER WALL (right/back) ──────────────────────────────────
function drawPosterWall() {
  for(let tx=0;tx<COLS;tx++){
    const tl=iso(tx,0,WH),tr=iso(tx+1,0,WH),bl=iso(tx,0,0),br=iso(tx+1,0,0);
    poly([tl,tr,br,bl],C.wallPoster,null);
  }
  for(let tx=0;tx<COLS;tx++){
    const tl=iso(tx,0,WH),tr=iso(tx+1,0,WH);
    poly([tl,tr,{x:tr.x+(TW/2)*.1,y:tr.y-4},{x:tl.x+(TW/2)*.1,y:tl.y-4}],C.wallCap,null);
  }
  for(let lx=0;lx<COLS;lx+=2){
    const lp=iso(lx+.5,0,WH);
    ctx.save(); ctx.fillStyle='rgba(255,214,0,.28)'; ctx.fillRect(lp.x-12,lp.y-3,24,5);
    ctx.fillStyle='rgba(255,214,0,.05)'; ctx.beginPath(); ctx.ellipse(lp.x,lp.y+20,24,20,0,0,Math.PI*2); ctx.fill(); ctx.restore();
  }
  for(let tx=0;tx<COLS;tx++) drawPoster(tx, POSTERS[tx % POSTERS.length]);
}

function drawPoster(tx, p) {
  const m=.1,zB=.12,zT=.90;
  const tl=iso(tx+m,0,WH*zT),tr=iso(tx+1-m,0,WH*zT),bl=iso(tx+m,0,WH*zB),br=iso(tx+1-m,0,WH*zB);
  const pts=[tl,tr,br,bl];
  const cx=(tl.x+tr.x+bl.x+br.x)/4, cy=(tl.y+tr.y+bl.y+br.y)/4;
  const pH=Math.max(bl.y,br.y)-Math.min(tl.y,tr.y), pW=tr.x-tl.x;
  withClip(pts,()=>{
    if(p.unlocked){
      poly(pts,p.bg,null);
      ctx.save(); ctx.strokeStyle=p.accent; ctx.shadowColor=p.accent; ctx.shadowBlur=4; ctx.lineWidth=1;
      poly(pts,null,p.accent,1); ctx.restore();
      ctx.save(); ctx.fillStyle=p.accent; ctx.shadowColor=p.accent; ctx.shadowBlur=5;
      drawPosterIcon(p.icon,cx,cy-pH*.12,pW*.25); ctx.restore();
      ctx.save(); ctx.fillStyle=p.accent; ctx.font='4px "Press Start 2P"'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(p.title,cx,cy+pH*.14);
      ctx.fillStyle='#fff'; ctx.font='3px "Press Start 2P"'; ctx.fillText(p.sub,cx,cy+pH*.28); ctx.restore();
    } else {
      poly(pts,'#0a0a12',null); ctx.save(); ctx.globalAlpha=.1; poly(pts,p.bg,null); ctx.restore();
      poly(pts,null,'rgba(100,100,120,.4)',.75);
      ctx.save(); ctx.fillStyle='rgba(160,160,180,.5)'; ctx.font='10px "Press Start 2P"'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('?',cx,cy-pH*.08); ctx.restore();
      ctx.save(); ctx.fillStyle='rgba(200,200,220,.6)'; ctx.font='3px "Press Start 2P"'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('COMING',cx,cy+pH*.15); ctx.fillText('SOON',cx,cy+pH*.28); ctx.restore();
    }
  });
}

function drawPosterIcon(type,cx,cy,size){
  const s=size*.9;
  switch(type){
    case'ship':ctx.fillRect(cx-s*.15,cy-s*.5,s*.3,s*.7);ctx.fillRect(cx-s*.4,cy,s*.8,s*.2);break;
    case'fist':ctx.fillRect(cx-s*.3,cy-s*.4,s*.6,s*.45);ctx.fillRect(cx-s*.35,cy+s*.05,s*.7,s*.3);break;
    case'sword':ctx.fillRect(cx-s*.07,cy-s*.55,s*.14,s*.85);ctx.fillRect(cx-s*.35,cy+s*.22,s*.7,s*.1);break;
    case'diamond':ctx.beginPath();ctx.moveTo(cx,cy-s*.5);ctx.lineTo(cx+s*.4,cy);ctx.lineTo(cx,cy+s*.5);ctx.lineTo(cx-s*.4,cy);ctx.closePath();ctx.fill();break;
    case'planet':ctx.beginPath();ctx.arc(cx,cy,s*.38,0,Math.PI*2);ctx.fill();break;
    case'car':ctx.fillRect(cx-s*.45,cy,s*.9,s*.25);ctx.fillRect(cx-s*.3,cy-s*.35,s*.6,s*.38);break;
    case'skull':ctx.beginPath();ctx.arc(cx,cy-s*.1,s*.38,0,Math.PI*2);ctx.fill();ctx.fillRect(cx-s*.3,cy+s*.22,s*.6,s*.28);break;
    case'claw':for(let i=0;i<3;i++){const a=-.5+i*.5;ctx.fillRect(cx+Math.cos(a)*s*.2-s*.06,cy-s*.5+Math.sin(a)*s*.1,s*.12,s*.45);}break;
    default:ctx.beginPath();ctx.arc(cx,cy,s*.35,0,Math.PI*2);ctx.fill();
  }
}

// ── FULL GARAGE SCENE ─────────────────────────────────────────
function drawGarage() {
  ctx.fillStyle = C.bg; ctx.fillRect(0,0,W,H);
  const sg=ctx.createLinearGradient(0,0,0,OY+10);
  sg.addColorStop(0,'#050210'); sg.addColorStop(1,'#0a0520');
  ctx.fillStyle=sg; ctx.fillRect(0,0,W,OY+10);

  drawDriveway();
  drawPosterWall();
  drawGarageWall();
  drawFloor();
  drawQueueMarkers();

  const o = state.owner;
  const objs = [
    { depth: 6.8+.7+1.1+.28, draw: () => drawSofa(6.8, 1.1) },
    { depth: 1.0+.25+1.5+.25, draw: drawChangeMachine },
    { depth: CAB_TX+.5+CAB_TY+.5, draw: drawCabinet },
    { depth: 2.3+5.4, draw: () => drawBarTable(2.3, 5.4) },
    { depth: 6.4+5.2, draw: () => drawBarTable(6.4, 5.2) },
    ...state.patrons.map(p => ({ depth: p.wx+p.wy, draw: () => p.draw() })),
    { depth: o.wx+o.wy+.05, draw: drawOwner },
  ];
  objs.sort((a,b) => a.depth - b.depth);
  for (const ob of objs) ob.draw();

  drawEventIndicators();
  drawCoins();
  drawFloats();
  drawControlsHint();

  ctx.fillStyle='rgba(0,229,255,.14)'; ctx.font='6px "Press Start 2P"';
  ctx.textAlign='left'; ctx.fillText('GARAGE \u2022 1F', 10, H-44);
}
