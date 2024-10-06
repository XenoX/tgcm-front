import {HydraMember} from "./hydra-member";

export interface Mood extends HydraMember {
  name: string;
  image: string;
  description: string;
  //type: boolean;
}