import { Playmate } from "../../data/data";
import { Paragraph } from "../Paragraphs";

export enum Step {
  Start = "start",
  Marilyn = "marilyn",
  NoIssue = "noissue",
  JenniferJackson = "jenniferjackson",
  InesRau = "inesrau",
  MarshaElle = "marshaelle",
  OtherFirsts = "otherfirsts",
  KarenMcDougal = "karenmcdougal",
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

export interface Title {
  type: "title";
  value: string;
}

export interface Quote {
  type: "quote";
  value: {
    text: string;
    attr: string;
  };
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
