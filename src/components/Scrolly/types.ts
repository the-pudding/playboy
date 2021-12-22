import { Playmate } from "../../data/data";
import { Quote, Title } from "../../type";
import { Paragraph } from "../Paragraphs";

export enum Step {
  Marilyn = "marilyn",
  JenniferJackson = "jenniferjackson",
  InesRau = "inesrau",
  MarshaElle = "marshaelle",

  OtherFirsts = "otherfirsts",
  Explainer = "explainer",
  NoIssue = "noissue",
  Hefner = "hefner",

  Age = "age",
  Height = "height",
  Weight = "weight",
  Bust = "bust",
  Waist = "waist",
  Hips = "hips",

  Hair = "hair",
  Enhancements = "enhancements",
  Ethnicity = "ethnicity",
}

export const TimelineSteps = [
  Step.Marilyn,
  Step.JenniferJackson,
  Step.InesRau,
  Step.MarshaElle,
];

export const PointSteps = [
  Step.OtherFirsts,
  Step.Explainer,
  Step.NoIssue,
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

export interface Section {
  type: Step;
  value: (Paragraph | Title | Quote)[];
}

export interface PlaymateCircle {
  cx: number;
  cy: number;
  fill: string;
  datum: Playmate;
}
