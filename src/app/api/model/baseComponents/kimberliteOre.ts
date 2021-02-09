import {Item} from '../item';
import {KIMBERLITE_ORE, KIMBERLITE_VEIN, MINING_MACHINE} from '../util/constants/names';

export class KimberliteOre extends Item {
  name = KIMBERLITE_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = KIMBERLITE_VEIN;
  imageSource = 'base/diamond_ore';
}
