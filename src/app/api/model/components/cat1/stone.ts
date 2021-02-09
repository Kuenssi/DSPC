import {Item} from '../../item';
import {SMELTER, STONE} from '../../util/constants/names';
import {Input} from '../../util/input';
import {StoneOre} from '../../baseComponents/stoneOre';

export class Stone extends Item {
  name = STONE;
  processingTime = 1;
  neededMachine = SMELTER;
  inputs = [
    new Input(new StoneOre(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/stone_brick';
}
