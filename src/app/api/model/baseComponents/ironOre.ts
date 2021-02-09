import {Item} from '../item';
import {IRON_ORE, IRON_VEIN, MINING_MACHINE} from '../util/constants/names';

export class IronOre extends Item {
  name = IRON_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = IRON_VEIN;
  imageSource = 'base/iron_ore';
}
