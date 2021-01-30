import {Item} from '../../item';
import {ACCUMULATOR, ASSEMBLER} from '../../../util/names';

export class Accumulator extends Item {
  name = ACCUMULATOR;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}


