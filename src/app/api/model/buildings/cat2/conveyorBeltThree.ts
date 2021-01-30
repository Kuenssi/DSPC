import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_3} from '../../../util/names';

export class ConveyorBeltThree extends Item {
  name = CONVEYOR_BELT_MK_3;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
