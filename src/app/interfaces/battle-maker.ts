import {HydraMember} from "./hydra-member";
import {BattleMakerType} from "./battle-maker-type";

export interface BattleMaker extends HydraMember {
  name: string;
  type: BattleMakerType;
  image: string;
  description: string;
}
