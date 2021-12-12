export const PLAYMATE_PINK = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--t1-3");

export const cm2in = (num) => (num ? num / 2.54 : null);
export const kg2lb = (num) => (num ? num / 0.45359237 : null);
