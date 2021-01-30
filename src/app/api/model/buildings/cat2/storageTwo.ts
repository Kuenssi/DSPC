import {Item} from '../../item';
import {ASSEMBLER, STORAGE_MK_2} from '../../../util/names';

export class StorageTwo extends Item {
  name = STORAGE_MK_2;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
