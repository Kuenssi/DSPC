import {Item} from '../../item';
import {ASSEMBLER, WIRELESS_POWER_TOWER} from '../../../util/names';

export class WirelessPowerTower extends Item {
  name = WIRELESS_POWER_TOWER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
