import {Item} from '../../item';
import {SMELTER, STEEL} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../cat1/ironIngot';

export class Steel extends Item {
  name = STEEL;
  processingTime = 3;
  neededMachine = SMELTER;
  inputs = [
    new Input(new IronIngot(), 3),
  ];
  outputAmount = 1;
}
