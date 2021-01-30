import {Item} from '../item';
import {IRON_ORE, MINING_MACHINE} from '../../util/names';

export class IronOre extends Item {
  name = IRON_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
