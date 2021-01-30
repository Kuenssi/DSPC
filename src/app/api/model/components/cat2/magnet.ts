import {Item} from '../../item';
import {MAGNET, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronOre} from '../../baseComponents/ironOre';

export class Magnet extends Item {
  name = MAGNET;
  processingTime = 1.5;
  neededMachine = SMELTER;
  inputs = [
    new Input(new IronOre(), 1),
  ];
  outputAmount = 1;
}
