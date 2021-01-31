import {Item} from '../../item';
import {ENERGY_MATRIX, RESEARCH_FACILITY} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {EnergeticGraphite} from '../cat1/energeticGraphite';
import {Hydrogen} from '../../baseComponents/hydrogen';

export class EnergyMatrix extends Item {
  name = ENERGY_MATRIX;
  processingTime = 6;
  neededMachine = RESEARCH_FACILITY;
  inputs = [
    new Input(new EnergeticGraphite(), 2),
    new Input(new Hydrogen(), 2),
  ];
  outputAmount = 1;
}
