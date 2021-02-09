import {Item} from '../item';
import {MINING_MACHINE, SILICON_ORE, SILICON_VEIN} from '../util/constants/names';

export class SiliconOre extends Item {
  name = SILICON_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = SILICON_VEIN;
  imageSource = 'base/silicium_ore';
}
