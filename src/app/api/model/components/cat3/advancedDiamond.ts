import {Item} from '../../item';
import {Input} from '../../util/input';
import {KimberliteOre} from '../../baseComponents/kimberliteOre';
import {A_DIAMOND, SMELTER} from '../../util/constants/names';

export class AdvancedDiamond extends Item {
  name = A_DIAMOND;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new KimberliteOre(), 1),
  ];
  outputAmount = 1;
}
