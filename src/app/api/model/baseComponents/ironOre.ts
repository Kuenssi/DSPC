import {Item} from '../item';
import {IRON_ORE, IRON_VEIN} from '../../util/constants/names';

export class IronOre extends Item {
  name = IRON_ORE;
  neededMachine = IRON_VEIN;
  baseItem = true;
}
