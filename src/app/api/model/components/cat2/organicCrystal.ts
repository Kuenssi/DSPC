import {Item} from '../../item';
import {CHEMICAL_PLANT, ORGANIC_CRYSTAL} from '../../../util/names';
import {Input} from '../../../util/input';
import {Plastic} from '../cat1/plastic';
import {RefinedOil} from '../../baseComponents/refinedOil';
import {Water} from '../../baseComponents/water';

export class OrganicCrystal extends Item {
  name = ORGANIC_CRYSTAL;
  processingTime = 6;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new Plastic(), 2),
    new Input(new RefinedOil(), 1),
    new Input(new Water(), 1),
  ];
  outputAmount = 1;
}
