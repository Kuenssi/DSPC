import {Item} from '../item';
import {HYDROGEN, OIL_REFINERY} from '../util/constants/names';
import {Input} from '../util/input';
import {RawOil} from './rawOil';

export class Hydrogen extends Item {
  name = HYDROGEN;
  processingTime = 4;
  neededMachine = OIL_REFINERY;
  inputs = [
    new Input(new RawOil(), 2),
  ];
  outputAmount = 1;
}
