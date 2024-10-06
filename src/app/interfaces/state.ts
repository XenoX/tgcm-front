import {HydraMember} from "./hydra-member";

export interface State extends HydraMember {
  name: string;
  image: string;
  description: string;
}