import * as _ from 'lodash';

export type Ship = {
  id: string;
  name: string;
  planet: Planet;
  maxLoad: MaxLoadSizes;
  cargoHold: Cargo[];
}

export type Cargo = {
  id: string;
  type: CargoType,
  size: 1 | 2 | 4,
  broken: boolean
}

const planets = ['Earth', 'Mars', 'Venus', 'Mercury'] as const;
export type Planet = typeof planets[number];
export const rndPlanet = () => _.sample(planets);

const cargoTypes = ['Medicine', 'Plants', 'Food', 'Tools'] as const;
export type CargoType = typeof cargoTypes[number];
export const rndCargoType = () => _.sample(cargoTypes);

const maxLoadSizes = [4, 8, 12, 16, 20] as const;
export type MaxLoadSizes = typeof maxLoadSizes[number];
export const rndMaxLoadSize = () => _.sample(maxLoadSizes);
