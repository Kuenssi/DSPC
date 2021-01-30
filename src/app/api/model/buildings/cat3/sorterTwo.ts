import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_2} from '../../../util/names';

export class SorterTwo extends Item {
  name = SORTER_MK_2;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
