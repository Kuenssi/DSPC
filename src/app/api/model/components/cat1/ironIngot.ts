import {Item} from '../../item';
import {IRON_INGOT, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronOre} from '../../baseComponents/ironOre';

export class IronIngot extends Item {
  name = IRON_INGOT;
  processingTime = 1;
  neededMachine = SMELTER;
  inputs = [
    new Input(new IronOre(), 1),
  ];
  outputAmount = 1;
}
