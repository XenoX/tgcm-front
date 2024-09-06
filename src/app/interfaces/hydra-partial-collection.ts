export interface HydraPartialCollection {
  '@id': string;
  '@type': string;
  'hydra:first': string;
  'hydra:last': string;
  'hydra:previous'?: string;
  'hydra:next'?: string;
}
