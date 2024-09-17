import {HydraMember} from "./hydra-member";

export interface Weather extends HydraMember {
  name: string;
  image: string;
  description: string;
}
