import {Item} from '../../item';
import {ASSEMBLER, WATER_PUMP} from '../../../util/names';

export class WaterPump extends Item {
  name = WATER_PUMP;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
