import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_1} from '../../../util/names';

export class SorterOne extends Item {
  name = SORTER_MK_1;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
