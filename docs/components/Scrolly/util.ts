import { format } from "d3";

import { Step } from "./types";

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const MONTHS_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const STEP_UNITS = {
  metric: {
    [Step.Start]: "",
    [Step.Marilyn]: "",
    [Step.NoIssue]: "",
    [Step.JenniferJackson]: "",
    [Step.InesRau]: "",
    [Step.MarshaElle]: "",
    [Step.OtherFirsts]: "",
    [Step.KarenMcDougal]: "",
    [Step.Hefner]: "",
    [Step.Age]: "years",
    [Step.Height]: "cm",
    [Step.Weight]: "kg",
    [Step.Bust]: "cm",
    [Step.Waist]: "cm",
    [Step.Hips]: "cm",
  },
  imperial: {
    [Step.Start]: "",
    [Step.Marilyn]: "",
    [Step.NoIssue]: "",
    [Step.JenniferJackson]: "",
    [Step.InesRau]: "",
    [Step.MarshaElle]: "",
    [Step.OtherFirsts]: "",
    [Step.KarenMcDougal]: "",
    [Step.Hefner]: "",
    [Step.Age]: "years",
    [Step.Height]: "ft.in.",
    [Step.Weight]: "lbs",
    [Step.Bust]: "in",
    [Step.Waist]: "in",
    [Step.Hips]: "in",
  },
};

export const formatFeetIn = (num) => {
  const feet = Math.floor(num / 12);
  const formatter = format(".0f");

  if (!feet) return `${formatter(num)}"`;

  return `${feet}'${formatter(num % 12)}"`;
};

export const StaticSteps = [
  Step.Start,
  Step.Marilyn,
  Step.NoIssue,
  Step.JenniferJackson,
  Step.InesRau,
  Step.MarshaElle,
  Step.OtherFirsts,
  Step.KarenMcDougal,
  Step.Hefner,
];

export const ScatterSteps = [
  Step.Age,
  Step.Height,
  Step.Weight,
  Step.Bust,
  Step.Waist,
  Step.Hips,
];

export const GroupingSteps = [Step.Hair, Step.Enhancements, Step.Ethnicity];
