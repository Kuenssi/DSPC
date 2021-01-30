import {Item} from '../item';
import {MINING_MACHINE, SILICON_ORE} from '../../util/names';

export class SiliconOre extends Item {
  name = SILICON_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
