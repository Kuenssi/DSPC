import {Item} from '../../item';
import {ASSEMBLER, FRACTIONATOR} from '../../../util/names';

export class Fractionator extends Item {
  name = FRACTIONATOR;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
