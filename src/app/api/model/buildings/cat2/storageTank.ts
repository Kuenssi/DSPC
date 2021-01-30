import {Item} from '../../item';
import {ASSEMBLER, STORAGE_TANK} from '../../../util/names';

export class StorageTank extends Item {
  name = STORAGE_TANK;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
