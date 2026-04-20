// ============================================================
//  iso.js — Isometric projection + shared palette
// ============================================================

const COLS = 9, ROWS = 7;
const TW = 64, TH = 32, TZ = 44, WH = 1.6;
const OX = 288, OY = 148;

function iso(wx, wy, wz) {
  wz = wz || 0;
  return {
    x: OX + (wx - wy) * (TW / 2),
    y: OY + (wx + wy) * (TH / 2) - wz * TZ
  };
}

// Shared colour palette
const C = {
  bg:          '#06040f',
  floorA:      '#1a0e30',
  floorB:      '#1e1238',
  floorEdge:   '#261650',
  driveA:      '#D2D1CD',
  driveB:      '#C8C7C3',
  driveEdge:   '#B8B7B3',
  wallPoster:  '#100c28',
  wallCap:     '#1c1245',
  garageMetal: '#1e1e32',
  cabTop:      '#32327e',
  cabLeft:     '#1e1e58',
  cabFront:    '#141442',
  cabScr:      '#001a0f',
  sofaMain:    '#3d2b1f',
  sofaDark:    '#2a1d14',
  sofaLight:   '#5a3e2b',
  sofaCushion: '#4a3328',
  tableTop:    '#2a1a08',
  tableLeg:    '#1e1206',
  pink:        '#ff006e',
  cyan:        '#00e5ff',
  yellow:      '#ffd600',
  green:       '#00ff9f',
  orange:      '#ff8c00',
  ownerSkin:   '#f0c08a',
};

// Shared drawing helpers
const canvas = document.getElementById('gameCanvas');
const ctx    = canvas.getContext('2d');
const W = 640, H = 480;

function poly(pts, fill, stroke, lw) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
  if (fill)  { ctx.fillStyle = fill;   ctx.fill(); }
  if (stroke){ ctx.strokeStyle = stroke; ctx.lineWidth = lw || 1; ctx.stroke(); }
}

function withClip(pts, fn) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
  ctx.clip();
  fn();
  ctx.restore();
}

function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
