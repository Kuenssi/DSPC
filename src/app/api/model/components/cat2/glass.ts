import {Item} from '../../item';
import {GLASS, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {StoneOre} from '../../baseComponents/stoneOre';

export class Glass extends Item {
  name = GLASS;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new StoneOre(), 2),
  ];
  outputAmount = 1;
}
