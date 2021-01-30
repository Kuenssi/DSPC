import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_2} from '../../../util/names';

export class ConveyorBeltTwo extends Item {
  name = CONVEYOR_BELT_MK_2;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
