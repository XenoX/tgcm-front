import {HydraMember} from "./hydra-member";
import {BattleMaker} from "./battle-maker";

export interface BattleMakerType extends HydraMember {
  name: string;
  image: string;
  color: string;
  description: string;
  icon?: string;
  battleMakers: BattleMaker[];
}
