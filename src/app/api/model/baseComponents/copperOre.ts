import {Item} from '../item';
import {COPPER_ORE, MINING_MACHINE} from '../../util/names';

export class CopperOre extends Item {
  name = COPPER_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
