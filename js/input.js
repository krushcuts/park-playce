// ============================================================
//  input.js — Keyboard and mouse handling
// ============================================================

const keys = {};

document.addEventListener('keydown', e => {
  keys[e.key] = true;

  if (state.screen === 'TITLE') {
    state.screen = 'NAME'; return;
  }

  if (state.screen === 'NAME') {
    if (e.key === 'Enter' && state.arcadeName.length > 0) {
      launchGame();
    } else if (e.key === 'Backspace') {
      state.arcadeName = state.arcadeName.slice(0, -1);
      e.preventDefault();
    } else if (e.key.length === 1 && state.arcadeName.length < 14) {
      state.arcadeName += e.key.toUpperCase();
    }
  }

  if (state.screen === 'GAME') {
    if ((e.key === 'z' || e.key === 'Z') && state.nearestInteractable) {
      doInteract(state.nearestInteractable);
    }
  }
});

document.addEventListener('keyup', e => { keys[e.key] = false; });

document.getElementById('gameCanvas').addEventListener('click', () => {
  if (state.screen === 'TITLE') state.screen = 'NAME';
});
