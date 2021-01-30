import {Item} from '../../item';
import {ASSEMBLER, VERTICAL_LAUNCHING_SILO} from '../../../util/names';

export class VerticalLaunchingSilo extends Item {
  name = VERTICAL_LAUNCHING_SILO;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
