import {Item} from '../../item';
import {ASSEMBLER, ELECTRIC_MOTOR} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../cat1/ironIngot';
import {Gear} from '../cat4/gear';
import {MagneticCoil} from '../cat2/magneticCoil';

export class ElectricMotor extends Item {
  name = ELECTRIC_MOTOR;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 2),
    new Input(new Gear(), 1),
    new Input(new MagneticCoil(), 1),
  ];
  outputAmount = 1;
}
