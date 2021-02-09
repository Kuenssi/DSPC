import {Item} from '../item';
import {OIL_REFINERY, X_RAY_CRACKING} from '../util/constants/names';
import {Input} from '../util/input';
import {Hydrogen, RefinedOil} from '../baseComponents/fluids';

export const XrayCracking: Item = {
  baseItem: false,
  veinType: '',

  name : X_RAY_CRACKING,
  processingTime : 4,
  neededMachine : OIL_REFINERY,
  inputs : [
    new Input(RefinedOil, 1),
    new Input(Hydrogen, 2),
  ],
  outputAmount : 1, //TODO
  // 3x Hydrogen
  // 1x Energetic Graphite
  imageSource : 'components/x_ray',
}
