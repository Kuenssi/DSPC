import {Item} from '../item';
import {KIMBERLITE_ORE, MINING_MACHINE} from '../../util/names';

export class KimberliteOre extends Item {
  name = KIMBERLITE_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
