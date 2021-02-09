import {Item} from '../../item';
import {SILICON_ORE_FROM_STONE, SMELTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {StoneOre} from '../../baseComponents/stoneOre';

export class SiliconOreFromStone extends Item {
  name = SILICON_ORE_FROM_STONE;
  processingTime = 10;
  neededMachine = SMELTER;
  inputs = [
    new Input(new StoneOre(), 10),
  ];
  outputAmount = 1;
  imageSource = 'base/silicium_ore';
}
