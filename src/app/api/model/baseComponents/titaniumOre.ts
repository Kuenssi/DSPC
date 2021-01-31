import {Item} from '../item';
import {MINING_MACHINE, TITANIUM_ORE, TITANIUM_VEIN} from '../../util/constants/names';

export class TitaniumOre extends Item {
  name = TITANIUM_ORE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = TITANIUM_VEIN;
}
