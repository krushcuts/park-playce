// ============================================================
//  screens/classifiedAd.js
//  The newspaper screen — first thing a player sees every run.
//  Beat 1: Newspaper with circled ad (procedural machine draw)
//  Beat 2: Click ad → stats card slides up
//  Beat 3: ACCEPT → garage fades in
// ============================================================

// ── AD DATA ──────────────────────────────────────────────────

const SELLER_NAMES = ['Ray','Dave','Mike','Carol','Jim','Linda','Gary','Pat','Terry','Bob','Sue','Dennis'];
const SELLER_REASONS = [
  'Moving next week, must sell.',
  'Kids grew up. No room anymore.',
  'Upgrading to newer model.',
  'Bar closed down. Everything must go.',
  'Wife says it has to go.',
  'Storage unit needs clearing.',
  'Estate sale — call evenings.',
  'Just come get it.',
  'Bought for the rec room, never used it.',
  'Son outgrew it. Good shape.',
];
const PHONE_PREFIXES = ['555-01','555-02','555-03','555-04','555-07','555-08'];

const GENRE_LABELS = {
  FIGHTER:  'Fighting game cabinet',
  RACER:    'Racing game cabinet',
  SHOOTER:  'Shooter cabinet',
};
const MECHANIC_LABELS = {
  'DUAL JOYSTICK':  'Dual joystick controls',
  'STEERING WHEEL': 'Steering wheel & pedals',
  'LIGHT GUN':      'Light gun controls',
};

let adData       = null;
let statsVisible = false;
let accepting    = false;
let acceptTick   = 0;

// ── GENERATE ─────────────────────────────────────────────────

function generateAd() {
  const machine = drawRandomMachine();

  // Write the drawn machine into the global MACHINE object
  MACHINE.name          = machine.name;
  MACHINE.genre         = machine.genre;
  MACHINE.mechanic      = machine.mechanic;
  MACHINE.players       = machine.players === '1P ONLY' ? 1 : 2;
  MACHINE.revenuePerPlay = machine.cost * 0.25;

  const seller = SELLER_NAMES[Math.floor(Math.random() * SELLER_NAMES.length)];
  const reason = SELLER_REASONS[Math.floor(Math.random() * SELLER_REASONS.length)];
  const prefix = PHONE_PREFIXES[Math.floor(Math.random() * PHONE_PREFIXES.length)];
  const phone  = prefix + String(Math.floor(Math.random() * 90) + 10);
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const month  = months[Math.floor(Math.random() * 12)];
  const day    = Math.floor(Math.random() * 28) + 1;

  adData = {
    machine,
    seller,
    reason,
    phone,
    date: `${month} ${day}, 1987`,
    stats: deriveStats(machine.genre, machine.mechanic, machine.players, machine.cost),
    decoyGenre: ['PUZZLE CABINET','SPORTS CABINET','MAZE CABINET'][Math.floor(Math.random()*3)],
    decoyPhone: '555-0' + Math.floor(Math.random()*900+100),
  };

  statsVisible = false;
  accepting    = false;
  acceptTick   = 0;
}

function deriveStats(genre, mechanic, players, cost) {
  const base = {
    FIGHTER: { ceil:5, rev:4, life:3, nov:5 },
    RACER:   { ceil:4, rev:3, life:4, nov:4 },
    SHOOTER: { ceil:3, rev:3, life:5, nov:2 },
  }[genre] || { ceil:3, rev:3, life:3, nov:3 };

  if (mechanic === 'LIGHT GUN')      { base.nov  = Math.min(6, base.nov+1);  base.ceil = Math.min(6, base.ceil+1); }
  if (mechanic === 'STEERING WHEEL') { base.nov  = Math.min(6, base.nov+1);  }
  if (mechanic === 'DUAL JOYSTICK')  { base.life = Math.min(6, base.life+1); }
  if (cost === 2)                    { base.rev  = Math.min(6, base.rev+1);  }
  if (players !== '1P ONLY')         { base.ceil = Math.min(6, base.ceil+1); }

  return base;
}

// ── HELPERS ──────────────────────────────────────────────────

function drawMarkerCircle(cx, cy, rx, ry) {
  ctx.save();
  ctx.strokeStyle = '#cc1111';
  ctx.lineWidth   = 2.5;
  ctx.globalAlpha = 0.85;
  ctx.shadowColor = '#cc1111';
  ctx.shadowBlur  = 3;
  // Slightly wobbly ellipse via beziers
  const w = () => (Math.random() - 0.5) * 4;
  ctx.beginPath();
  ctx.moveTo(cx - rx + w(), cy + w());
  ctx.bezierCurveTo(cx-rx+w(), cy-ry*1.12+w(), cx+rx+w(), cy-ry*1.12+w(), cx+rx+w(), cy+w());
  ctx.bezierCurveTo(cx+rx+w(), cy+ry*1.12+w(), cx-rx+w(), cy+ry*1.12+w(), cx-rx+w(), cy+w());
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawMeterPips(x, y, filled, total, color) {
  for (let i = 0; i < total; i++) {
    if (i < filled) { ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 4; }
    else            { ctx.fillStyle = '#1e1e30'; ctx.shadowBlur = 0; }
    ctx.fillRect(x + i*14, y, 10, 8);
    ctx.strokeStyle = i < filled ? color : '#2a2a3a';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x + i*14, y, 10, 8);
  }
  ctx.shadowBlur = 0;
}

// ── MAIN DRAW ─────────────────────────────────────────────────

function drawClassifiedAd() {
  if (!adData) generateAd();

  // Dark kitchen table
  ctx.fillStyle = '#1a1208';
  ctx.fillRect(0, 0, W, H);

  // Warm bulb light
  const lg = ctx.createRadialGradient(W/2, -30, 10, W/2, -30, 400);
  lg.addColorStop(0, 'rgba(255,210,120,0.16)');
  lg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, W, H);

  // ── PAPER ────────────────────────────────────────────────
  const NX=28, NY=10, NW=586, NH=400;

  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillRect(NX+5, NY+6, NW, NH);

  ctx.fillStyle = '#e4dcc0';
  ctx.fillRect(NX, NY, NW, NH);

  // Edge yellowing
  ['rgba(140,100,30,0.1)','rgba(120,90,20,0.08)'].forEach((c,i) => {
    const g = ctx.createRadialGradient(
      i===0 ? NX : NX+NW, i===0 ? NY : NY+NH, 0,
      i===0 ? NX : NX+NW, i===0 ? NY : NY+NH, 180
    );
    g.addColorStop(0, c); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(NX, NY, NW, NH);
  });

  // ── MASTHEAD ─────────────────────────────────────────────
  const MH = 44;
  ctx.fillStyle = '#d8d0b0';
  ctx.fillRect(NX, NY, NW, MH);
  ctx.strokeStyle = '#1a1008'; ctx.lineWidth = 2;
  ctx.strokeRect(NX, NY, NW, MH);

  ctx.fillStyle = '#8b1a1a'; ctx.font = '7px "Press Start 2P"'; ctx.textAlign = 'left';
  ctx.fillText('EXTRA!', NX+8, NY+14); ctx.fillText('EXTRA!', NX+8, NY+26);

  ctx.fillStyle = '#1a1008'; ctx.font = 'bold 22px serif'; ctx.textAlign = 'center';
  ctx.fillText('The Daily Register', NX+NW/2, NY+30);

  ctx.fillStyle = '#3a2a10'; ctx.font = '6px "Press Start 2P"'; ctx.textAlign = 'right';
  ctx.fillText('MORNING', NX+NW-8, NY+16); ctx.fillText('EDITION', NX+NW-8, NY+28);

  ctx.fillStyle = '#2a1a08'; ctx.font = '7px "Press Start 2P"'; ctx.textAlign = 'center';
  ctx.fillText(adData.date.toUpperCase() + '  \xB7  VOL. XLII  \xB7  25\xA2', NX+NW/2, NY+MH+10);
  ctx.strokeStyle = '#2a1a08'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(NX+4, NY+MH+14); ctx.lineTo(NX+NW-4, NY+MH+14); ctx.stroke();

  // ── COLUMNS ──────────────────────────────────────────────
  const CY  = NY+MH+18;
  const CX1 = NX+6,    CW1 = 118;
  const CX2 = CX1+CW1+6, CW2 = 234;
  const CX3 = CX2+CW2+6, CW3 = 210;

  ctx.strokeStyle = '#2a1a08'; ctx.lineWidth = 0.75;
  ctx.beginPath(); ctx.moveTo(CX2-3,CY); ctx.lineTo(CX2-3,NY+NH-6); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(CX3-3,CY); ctx.lineTo(CX3-3,NY+NH-6); ctx.stroke();

  // LEFT — filler
  ctx.fillStyle='#1a1008'; ctx.font='6px "Press Start 2P"'; ctx.textAlign='left';
  ctx.fillText('LOCAL NEWS', CX1, CY+8);
  ctx.beginPath(); ctx.moveTo(CX1,CY+11); ctx.lineTo(CX1+CW1-2,CY+11); ctx.stroke();
  ctx.fillStyle='#3a2810'; ctx.font='6.5px "Courier Prime",monospace';
  ['CITY COUNCIL','VOTES ON NEW','BUDGET PLAN','','BLAHBLAH','BLAHBLAH',
   'BLAHBLAH','BLAHBLAH','BLAHBLAH','BLAHBLAH','BLAHBLAH','BLAHBLAH',
   'BLAHBLAH','BLAHBLAH'].forEach((l,i)=>ctx.fillText(l,CX1,CY+22+i*11));

  ctx.font='5.5px "Press Start 2P"'; ctx.fillStyle='#1a1008';
  ctx.fillText('CLASSIFIEDS', CX1, CY+22+14*11);

  const smallAds=[
    ['HELP WANTED','PT eves & wknds.','Must be reliable.','Call 555-0182'],
    ['FOR RENT','2BR. Heat incl.','$485/mo. Refs req.','555-0199'],
  ];
  smallAds.forEach((ad,i)=>{
    const ay=CY+22+15*11+i*54;
    ctx.strokeStyle='#4a3a1a'; ctx.lineWidth=0.75; ctx.strokeRect(CX1,ay,CW1-4,48);
    ctx.fillStyle='#1a1008'; ctx.font='5px "Press Start 2P"'; ctx.fillText(ad[0],CX1+3,ay+10);
    ctx.fillStyle='#3a2810'; ctx.font='6.5px "Courier Prime",monospace';
    ad.slice(1).forEach((l,j)=>ctx.fillText(l,CX1+3,ay+20+j*11));
  });

  // CENTER — headline + the ad
  ctx.fillStyle='#1a1008'; ctx.font='6px "Press Start 2P"'; ctx.textAlign='left';
  ctx.fillText('SPORTS & COMMUNITY', CX2, CY+8);
  ctx.beginPath(); ctx.moveTo(CX2,CY+11); ctx.lineTo(CX2+CW2-2,CY+11); ctx.stroke();
  ctx.fillStyle='#3a2810'; ctx.font='6.5px "Courier Prime",monospace';
  ['RIVERSIDE HIGH','TAKES STATE TITLE','','BLAHBLAHBLAH BLAH','BLAHBLAH BLAHBLAH','BLAHBLAHBLAH BLAH','']
    .forEach((l,i)=>ctx.fillText(l,CX2,CY+22+i*11));

  // THE AD
  const AX=CX2, AY=CY+100, AW=CW2-4, AH=130;
  ctx.fillStyle='#ede5cc'; ctx.fillRect(AX,AY,AW,AH);
  ctx.strokeStyle='#1a1008'; ctx.lineWidth=1.5; ctx.strokeRect(AX,AY,AW,AH);

  ctx.fillStyle='#1a1008'; ctx.font='5.5px "Press Start 2P"'; ctx.textAlign='center';
  ctx.fillText('FREE TO GOOD HOME', AX+AW/2, AY+14);
  ctx.strokeStyle='#1a1008'; ctx.lineWidth=0.75;
  ctx.beginPath(); ctx.moveTo(AX+6,AY+18); ctx.lineTo(AX+AW-6,AY+18); ctx.stroke();

  ctx.fillStyle='#0a0820'; ctx.font='10px "Press Start 2P"'; ctx.textAlign='center';
  ctx.fillText(adData.machine.name, AX+AW/2, AY+35);

  ctx.font='7px "Courier Prime",monospace'; ctx.fillStyle='#2a1a08'; ctx.textAlign='left';
  [
    GENRE_LABELS[adData.machine.genre] || 'Arcade cabinet',
    MECHANIC_LABELS[adData.machine.mechanic] || adData.machine.mechanic,
    adData.machine.players + '. Works great. Some wear.',
    adData.reason,
  ].forEach((l,i)=>ctx.fillText(l,AX+8,AY+50+i*13));

  ctx.font='italic 7px "Courier Prime",monospace'; ctx.fillStyle='#3a2810';
  ctx.fillText(`\u2014 ${adData.seller}  \xB7  ${adData.phone}`, AX+8, AY+108);

  if (!statsVisible && Math.floor(Date.now()/400)%2===0) {
    ctx.fillStyle='#8b1a1a'; ctx.font='4.5px "Press Start 2P"'; ctx.textAlign='right';
    ctx.fillText('\u25BA CLICK AD TO INSPECT', AX+AW-4, AY+AH-6);
  }

  // CROSSED-OUT DECOY
  const DX=CX2, DY=AY+AH+8, DW=CW2-4, DH=44;
  ctx.save(); ctx.globalAlpha=0.5;
  ctx.strokeStyle='#4a3a1a'; ctx.lineWidth=0.75; ctx.strokeRect(DX,DY,DW,DH);
  ctx.fillStyle='#1a1008'; ctx.font='5px "Press Start 2P"'; ctx.textAlign='left';
  ctx.fillText('FOR SALE', DX+4, DY+10);
  ctx.fillStyle='#3a2810'; ctx.font='6.5px "Courier Prime",monospace';
  ctx.fillText(adData.decoyGenre, DX+4, DY+22);
  ctx.fillText('ALREADY SOLD  \xB7  ' + adData.decoyPhone, DX+4, DY+34);
  ctx.strokeStyle='#8b1a1a'; ctx.lineWidth=1.2;
  [8,20,32].forEach(oy=>{ctx.beginPath();ctx.moveTo(DX+2,DY+oy);ctx.lineTo(DX+DW-2,DY+oy);ctx.stroke();});
  ctx.restore();

  // RIGHT — more classifieds
  ctx.fillStyle='#1a1008'; ctx.font='6px "Press Start 2P"'; ctx.textAlign='left';
  ctx.fillText('CLASSIFIEDS', CX3, CY+8);
  ctx.beginPath(); ctx.moveTo(CX3,CY+11); ctx.lineTo(CX3+CW3-6,CY+11); ctx.stroke();
  [
    ['USED CARS','\'83 Civic. 74k mi.','Runs well. $1,800.','Wknds. 555-0167'],
    ['MOVING SALE','Furn, appliances.','Sat 8am-2pm.','14 Maple Drive'],
    ['FOR SALE','Riding mower.','Good cond. $340.','Call 555-0188'],
    ['GUITAR AMP','Fender, 65w.','Works perfect.','$210. 555-0155'],
    ['PIANO LESSONS','All ages welcome.','$15/hr. Eves.','555-0191'],
  ].forEach((ad,i)=>{
    const ay=CY+18+i*60;
    ctx.strokeStyle='#4a3a1a'; ctx.lineWidth=0.75; ctx.strokeRect(CX3,ay,CW3-6,54);
    ctx.fillStyle='#1a1008'; ctx.font='5px "Press Start 2P"'; ctx.fillText(ad[0],CX3+3,ay+10);
    ctx.fillStyle='#3a2810'; ctx.font='6.5px "Courier Prime",monospace';
    ad.slice(1).forEach((l,j)=>ctx.fillText(l,CX3+3,ay+22+j*11));
  });

  // RED CIRCLE
  if (!statsVisible) {
    drawMarkerCircle(AX+AW/2, AY+AH/2-4, AW/2+8, AH/2+8);
  }

  // HANDS
  drawHands();

  // STATS CARD
  if (statsVisible) drawStatsCard();

  // ACCEPT FLASH TRANSITION
  if (accepting) {
    acceptTick++;
    if (acceptTick > 30) {
      const alpha = Math.min(1, (acceptTick-30)/25);
      ctx.fillStyle = `rgba(232,224,192,${alpha})`;
      ctx.fillRect(0,0,W,H);
      if (acceptTick > 60) {
        accepting = false;
        launchGame();
      }
    }
  }
}

function drawHands() {
  const HY = H - 78;
  const skin = C.ownerSkin;
  const sleeve = '#2a2a4a';

  // LEFT HAND
  ctx.fillStyle = skin;
  ctx.fillRect(18, HY+18, 52, 44);
  ctx.fillRect(14, HY+4,  14, 28);
  ctx.fillRect(30, HY,    13, 28);
  ctx.fillRect(45, HY+2,  13, 26);
  ctx.fillRect(60, HY+6,  12, 24);
  ctx.fillRect(8,  HY+28, 16, 24);
  ctx.fillStyle = 'rgba(0,0,0,0.1)'; ctx.fillRect(14,HY+18,58,4);
  ctx.fillStyle = sleeve; ctx.fillRect(6, HY+54, 76, 30);

  // RIGHT HAND
  ctx.fillStyle = skin;
  const RX = W-90;
  ctx.fillRect(RX,    HY+18, 52, 44);
  ctx.fillRect(RX-4,  HY+4,  14, 28);
  ctx.fillRect(RX+12, HY,    13, 28);
  ctx.fillRect(RX+27, HY+2,  13, 26);
  ctx.fillRect(RX+42, HY+6,  12, 24);
  ctx.fillRect(RX+58, HY+28, 16, 24);
  ctx.fillStyle = 'rgba(0,0,0,0.1)'; ctx.fillRect(RX,HY+18,58,4);
  ctx.fillStyle = sleeve; ctx.fillRect(RX-4, HY+54, 76, 30);

  // Table edge
  ctx.fillStyle = '#0e0c08'; ctx.fillRect(0, H-24, W, 24);
}

function drawStatsCard() {
  const CW=400, CH=230;
  const CX=(W-CW)/2, CY=H-CH-6;

  ctx.fillStyle='rgba(0,0,0,0.65)'; ctx.fillRect(CX+4,CY+4,CW,CH);
  ctx.fillStyle='#06040f'; ctx.fillRect(CX,CY,CW,CH);
  ctx.strokeStyle=C.pink; ctx.lineWidth=2; ctx.strokeRect(CX,CY,CW,CH);

  ctx.fillStyle=C.pink; ctx.fillRect(CX,CY,CW,22);
  ctx.fillStyle='#06040f'; ctx.font='7px "Press Start 2P"'; ctx.textAlign='center';
  ctx.fillText('MACHINE ACQUIRED', CX+CW/2, CY+15);

  ctx.fillStyle=C.yellow; ctx.shadowColor=C.yellow; ctx.shadowBlur=8;
  ctx.font='11px "Press Start 2P"'; ctx.textAlign='center';
  ctx.fillText(adData.machine.name, CX+CW/2, CY+46);
  ctx.shadowBlur=0;

  const rows=[
    ['GENRE',     adData.machine.genre],
    ['CONTROLS',  adData.machine.mechanic],
    ['DIFFICULTY','ESCALATING'],
    ['CONDITION', 'WORN'],
    ['PLAYERS',   adData.machine.players],
    ['COST/PLAY', adData.machine.cost+(adData.machine.cost===1?' QUARTER':' QUARTERS')],
  ];
  ctx.font='5.5px "Press Start 2P"';
  rows.forEach(([label,val],i)=>{
    const ry=CY+64+i*14;
    ctx.fillStyle=C.cyan; ctx.textAlign='left';  ctx.fillText(label,CX+14,ry);
    ctx.fillStyle='#fff'; ctx.textAlign='right'; ctx.fillText(val,CX+CW-14,ry);
  });

  ctx.strokeStyle='rgba(255,0,110,0.3)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(CX+10,CY+152); ctx.lineTo(CX+CW-10,CY+152); ctx.stroke();

  const meters=[
    ['POP CEILING', adData.stats.ceil, 6, C.green],
    ['REVENUE',     adData.stats.rev,  6, C.yellow],
    ['LIFESPAN',    adData.stats.life, 6, C.cyan],
    ['NOVELTY',     adData.stats.nov,  6, C.pink],
  ];
  ctx.font='5px "Press Start 2P"';
  meters.forEach(([label,filled,total,color],i)=>{
    const my=CY+162+i*14;
    ctx.fillStyle=C.cyan; ctx.textAlign='left'; ctx.fillText(label,CX+14,my+8);
    drawMeterPips(CX+CW-14-total*14, my, filled, total, color);
  });

  const blink=Math.floor(Date.now()/400)%2===0;
  ctx.fillStyle=blink?C.green:'#004422';
  ctx.fillRect(CX+14,CY+CH-28,CW-28,20);
  ctx.fillStyle='#000'; ctx.font='7px "Press Start 2P"'; ctx.textAlign='center';
  ctx.fillText('[ENTER] ACCEPT — OPEN YOUR DOORS', CX+CW/2, CY+CH-13);
}

// ── INPUT ────────────────────────────────────────────────────

canvas.addEventListener('click', e => {
  if (state.screen !== 'AD' || accepting) return;
  const rect=canvas.getBoundingClientRect();
  const mx=(e.clientX-rect.left)*(W/rect.width);
  const my=(e.clientY-rect.top)*(H/rect.height);
  // Click the ad box
  const NX=28,NY=10,MH=44,CY=NY+MH+18,CX2=NX+6+118+6;
  const AX=CX2,AY=CY+100,AW=230,AH=130;
  if (!statsVisible && mx>AX && mx<AX+AW && my>AY && my<AY+AH) {
    statsVisible = true;
  }
});

document.addEventListener('keydown', e => {
  if (state.screen !== 'AD' || accepting) return;
  if (e.key==='Enter' && statsVisible) {
    accepting  = true;
    acceptTick = 0;
  }
});

// ── ENTRY POINT ──────────────────────────────────────────────

function initClassifiedAd() {
  generateAd();
  state.screen = 'AD';
}
