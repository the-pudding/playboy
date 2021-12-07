import { identity } from "remeda";
import { Playmate } from "../../data/data";

import { Units } from "../../store";
import { PLAYMATE_PINK } from "../../util";
import { Step } from "./types";

const cm2in = (num) => (num ? num / 2.54 : null);
const kg2lb = (num) => (num ? num / 0.45359237 : null);

export type XAccessor = (d: Playmate) => number | string | Playmate | Date;
export type YAccessor = (d: Playmate) => number | string | Playmate;
export type CAccessor = (d: Playmate) => number | string;

export default function accessors(
  step: Step,
  units: Units
): [XAccessor, YAccessor, CAccessor] {
  const isMetric = units === "metric";

  switch (step) {
    case Step.Start:
    case Step.Marilyn:
    case Step.NoIssue:
    case Step.JenniferJackson:
    case Step.InesRau:
    case Step.MarshaElle:
    case Step.OtherFirsts:
    case Step.KarenMcDougal:
    case Step.Hefner:
      return [
        (d) => d.year.toString(),
        (d) => d.month.toString(),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Age:
      return [(d) => d.date, (d) => d.mateAge, (d) => PLAYMATE_PINK];
    case Step.Height:
      return [
        (d) => d.date,
        (d) => (isMetric ? d.heightCM : cm2in(d.heightCM)),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Weight:
      return [
        (d) => d.date,
        (d) => (isMetric ? d.weightKG : kg2lb(d.weightKG)),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Bust:
      return [
        (d) => d.date,
        (d) => (isMetric ? d.bustCM : cm2in(d.bustCM)),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Waist:
      return [
        (d) => d.date,
        (d) => (isMetric ? d.waistCM : cm2in(d.waistCM)),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Hips:
      return [
        (d) => d.date,
        (d) => (isMetric ? d.hipsCM : cm2in(d.hipsCM)),
        (d) => PLAYMATE_PINK,
      ];
    case Step.Hair:
      return [identity, identity, (d) => d.hair];
    case Step.Enhancements:
      return [identity, identity, (d) => d.breasts];
    case Step.Ethnicity:
      return [identity, identity, (d) => d.ethnicity];
    default:
      throw Error(`step ${step} is not accounted for!`);
  }
}
