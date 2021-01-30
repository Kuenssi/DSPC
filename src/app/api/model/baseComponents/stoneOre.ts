import {Item} from '../item';
import {MINING_MACHINE, STONE_ORE} from '../../util/names';

export class StoneOre extends Item {
  name = STONE_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
