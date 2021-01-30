import {Item} from '../../item';
import {ASSEMBLER, STORAGE_MK_1} from '../../../util/names';

export class StorageOne extends Item {
  name = STORAGE_MK_1;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
