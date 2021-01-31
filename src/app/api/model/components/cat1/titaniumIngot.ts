import {Item} from '../../item';
import {SMELTER, TITANIUM_INGOT} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {TitaniumOre} from '../../baseComponents/titaniumOre';

export class TitaniumIngot extends Item {
  name = TITANIUM_INGOT;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new TitaniumOre(), 2),
  ];
  outputAmount = 1;
}
