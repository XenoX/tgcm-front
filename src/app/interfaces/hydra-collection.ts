import {HydraPartialCollection} from "./hydra-partial-collection";
import {HydraMember} from "./hydra-member";

export interface HydraCollection<T extends HydraMember = HydraMember> {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItems': number;
  'hydra:member': T[];
  'hydra:search'?: {};
  'hydra:view'?: HydraPartialCollection;
}
