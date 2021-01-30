import {Item} from '../../item';
import {ASSEMBLER, MINI_FUSION_POWER_STATION} from '../../../util/names';

export class MiniFusionPowerStation extends Item {
  name = MINI_FUSION_POWER_STATION;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
