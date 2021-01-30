import {Item} from '../../item';
import {ASSEMBLER, MINING_MACHINE} from '../../../util/names';

export class MiningMachine extends Item {
  name = MINING_MACHINE;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
