import {Item} from '../item';
import {MINING_MACHINE, TITANIUM_ORE} from '../../util/names';

export class TitaniumOre extends Item {
  name = TITANIUM_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
