import {Item} from '../../item';
import {CHEMICAL_PLANT, SULFURIC_ACID} from '../../util/constants/names';
import {Input} from '../../util/input';
import {RefinedOil} from '../../baseComponents/refinedOil';
import {StoneOre} from '../../baseComponents/stoneOre';
import {Water} from '../../baseComponents/water';

export class SulfuricAcid extends Item {
  name = SULFURIC_ACID;
  processingTime = 6;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new RefinedOil(), 6),
    new Input(new StoneOre(), 8),
    new Input(new Water(), 4),
  ];
  outputAmount = 4;
}
