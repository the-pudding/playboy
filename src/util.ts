export const PLAYMATE_PINK =
  typeof window === "undefined"
    ? "#ffbcbc"
    : window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--color-playmate");

export const cm2in = (num) => (num ? num / 2.54 : null);
export const in2cm = (num) => (num ? num * 2.54 : null);
export const kg2lb = (num) => (num ? num / 0.45359237 : null);
