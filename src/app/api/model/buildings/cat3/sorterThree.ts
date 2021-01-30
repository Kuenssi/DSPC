import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_3} from '../../../util/names';

export class SorterThree extends Item {
  name = SORTER_MK_3;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
