import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_1} from '../../../util/names';

export class AssemblerOne extends Item {
  name = ASSEMBLING_MACHINE_MK_1;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
