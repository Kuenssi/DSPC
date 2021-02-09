import {Item} from '../item';
import {MINING_MACHINE, STONE_ORE, STONE_VEIN} from '../util/constants/names';

export class StoneOre extends Item {
  name = STONE_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = STONE_VEIN;
  imageSource = 'base/stone_ore';
}
