import {Item} from '../item';
import {COAL_ORE, COAL_VEIN, MINING_MACHINE} from '../util/constants/names';

export class CoalOre extends Item {
  name = COAL_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = COAL_VEIN;
  imageSource = 'base/coal_ore';
}
