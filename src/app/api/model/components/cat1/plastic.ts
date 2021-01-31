import {Item} from '../../item';
import {CHEMICAL_PLANT, PLASTIC} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {RefinedOil} from '../../baseComponents/refinedOil';
import {EnergeticGraphite} from './energeticGraphite';

export class Plastic extends Item {
  name = PLASTIC;
  processingTime = 3;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new RefinedOil(), 2),
    new Input(new EnergeticGraphite(), 1),
  ];
  outputAmount = 1;
}
