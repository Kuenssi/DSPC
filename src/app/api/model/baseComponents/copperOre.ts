import {Item} from '../item';
import {COPPER_ORE, COPPER_VEIN, MINING_MACHINE} from '../util/constants/names';

export class CopperOre extends Item {
  name = COPPER_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = COPPER_VEIN;
  imageSource = 'base/copper_ore';
}
