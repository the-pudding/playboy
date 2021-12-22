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
