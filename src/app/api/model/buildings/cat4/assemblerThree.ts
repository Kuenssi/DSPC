import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_3} from '../../../util/names';

export class AssemblerThree extends Item {
  name = ASSEMBLING_MACHINE_MK_3;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
