import {Item} from '../item';
import {OIL_REFINERY, PLASMA_REFINING} from '../util/constants/names';
import {Input} from '../util/input';
import {RawOil} from '../baseComponents/fluids';

export const PlasmaRefining: Item = {
  baseItem: false,
  veinType: '',

  name: PLASMA_REFINING,
  processingTime: 4,
  neededMachine: OIL_REFINERY,
  inputs: [
    new Input(RawOil, 2),
  ],
  outputAmount: 1, //TODO
  // 2x RefinedOil
  // 1x Hydrogen
  imageSource: 'components/plasma_refining',
}
