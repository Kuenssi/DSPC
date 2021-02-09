import {Item} from '../../item';
import {ASSEMBLER, WIRELESS_POWER_TOWER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TeslaTower} from './teslaTower';
import {PlasmaExciter} from '../../components/cat5/plasmaExciter';

export class WirelessPowerTower extends Item {
  name = WIRELESS_POWER_TOWER;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TeslaTower(), 1),
    new Input(new PlasmaExciter(), 3),
  ];
  outputAmount = 1;
  imageSource = 'buildings/charging_pole';
}
