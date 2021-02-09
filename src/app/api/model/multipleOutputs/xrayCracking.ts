import {Item} from '../item';
import {OIL_REFINERY, X_RAY_CRACKING} from '../util/constants/names';
import {Input} from '../util/input';
import {RefinedOil} from '../baseComponents/refinedOil';
import {Hydrogen} from '../baseComponents/hydrogen';

export class XrayCracking extends Item {
  name = X_RAY_CRACKING;
  processingTime = 4;
  neededMachine = OIL_REFINERY;
  inputs = [
    new Input(new RefinedOil(), 1),
    new Input(new Hydrogen(), 2),
  ];
  outputAmount = 1; //TODO
  // 3x Hydrogen
  // 1x Energetic Graphite
  imageSource = 'components/x_ray';
}
