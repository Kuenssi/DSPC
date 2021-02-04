import {Item} from '../../item';
import {ASSEMBLER, THERMAL_POWER_STATION} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Stone} from '../../components/cat1/stone';
import {Gear} from '../../components/cat4/gear';
import {MagneticCoil} from '../../components/cat2/magneticCoil';

export class ThermalPowerStation extends Item {
  name = THERMAL_POWER_STATION;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 10),
    new Input(new Stone(), 4),
    new Input(new Gear(), 4),
    new Input(new MagneticCoil(), 4),
  ];
  outputAmount = 1;
}
