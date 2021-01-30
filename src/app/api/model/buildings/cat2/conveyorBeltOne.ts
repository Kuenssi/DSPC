import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_1} from '../../../util/names';

export class ConveyorBeltOne extends Item {
  name = CONVEYOR_BELT_MK_1;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
