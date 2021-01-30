import {Item} from '../../item';
import {ASSEMBLER, ENERGY_EXCHANGER} from '../../../util/names';

export class EnergyExchanger extends Item {
  name = ENERGY_EXCHANGER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
