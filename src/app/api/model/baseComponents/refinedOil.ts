import {Item} from '../item';
import {OIL_REFINERY, REFINED_OIL} from '../../util/constants/names';
import {Input} from '../../util/input';
import {RawOil} from './rawOil';

export class RefinedOil extends Item {
  name = REFINED_OIL;
  processingTime = 4;
  neededMachine = OIL_REFINERY;
  inputs = [
    new Input(new RawOil(), 2),
  ];
  outputAmount = 2;
}
