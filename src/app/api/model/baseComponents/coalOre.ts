import {Item} from '../item';
import {COAL_ORE, MINING_MACHINE} from '../../util/names';

export class CoalOre extends Item {
  name = COAL_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
