import {Item} from '../../item';
import {MAGNET, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../cat1/ironIngot';

export class Magnet extends Item {
  name = MAGNET;
  processingTime = 1.5;
  neededMachine = SMELTER;
  inputs = [
    new Input(new IronIngot(), 1),
  ];
  outputAmount = 1;
}
