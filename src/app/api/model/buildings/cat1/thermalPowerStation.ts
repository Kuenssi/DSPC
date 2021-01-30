import {Item} from '../../item';
import {ASSEMBLER, THERMAL_POWER_STATION} from '../../../util/names';

export class ThermalPowerStation extends Item {
  name = THERMAL_POWER_STATION;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
