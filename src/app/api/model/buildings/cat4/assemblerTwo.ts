import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_2} from '../../../util/names';

export class AssemblerTwo extends Item {
  name = ASSEMBLING_MACHINE_MK_2;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
