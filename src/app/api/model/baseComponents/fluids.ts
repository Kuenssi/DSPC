import {Item} from '../item';
import {Input} from '../util/input';
import {
  ANTIMATTER, CRITICAL_PHOTON,
  HYDROGEN, MINI_PARTICLE_COLLIDER,
  OIL_EXTRACTOR,
  OIL_REFINERY,
  RAW_OIL,
  RAW_OIL_SPOT, RAY_RECEIVER,
  REFINED_OIL, WATER,
  WATER_PUMP
} from '../util/constants/names';

export const RawOil: Item = {
  baseItem: true,
  imageSource: 'base/oil',
  inputs: [],
  name: RAW_OIL,
  neededMachine: OIL_EXTRACTOR,
  outputAmount: 0,
  processingTime: 0,
  veinType: RAW_OIL_SPOT
}

export const Hydrogen: Item = {
  baseItem: false,
  imageSource: 'base/hydrogen',
  inputs: [new Input(RawOil, 2),],
  name: HYDROGEN,
  neededMachine: OIL_REFINERY,
  outputAmount: 1,
  processingTime: 4,
  veinType: ''
}

export const RefinedOil: Item = {
  baseItem: false,
  imageSource: 'base/refined_oil',
  inputs: [new Input(RawOil, 2),],
  name: REFINED_OIL,
  neededMachine: OIL_REFINERY,
  outputAmount: 2,
  processingTime: 4,
  veinType: ''
}

export const Water: Item = {
  baseItem: true,
  imageSource: 'base/water',
  inputs: [],
  name: WATER,
  neededMachine: WATER_PUMP,
  outputAmount: 1,
  processingTime: 1,
  veinType: WATER_PUMP + 's'
}

export const CriticalPhoton: Item = {
  baseItem: true,
  imageSource: 'base/photon_capacitor',
  inputs: [],
  name: CRITICAL_PHOTON,
  neededMachine: RAY_RECEIVER,
  outputAmount: 1,
  processingTime: 0,
  veinType: RAY_RECEIVER + 's'
}

export const Antimatter: Item = {
  baseItem: false,
  imageSource: 'base/antimatter',
  inputs: [new Input(CriticalPhoton, 2)],
  name: ANTIMATTER,
  neededMachine: MINI_PARTICLE_COLLIDER,
  outputAmount: 2,
  processingTime: 2,
  veinType: ''
}
