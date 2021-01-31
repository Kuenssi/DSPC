import {Item} from '../../item';
import {ASSEMBLER, ELECTROMAGNETIC_TURBINE} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {ElectricMotor} from '../cat3/electricMotor';
import {MagneticCoil} from '../cat2/magneticCoil';

export class ElectromagneticTurbine extends Item {
  name = ELECTROMAGNETIC_TURBINE;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new ElectricMotor(), 2),
    new Input(new MagneticCoil(), 2),
  ];
  outputAmount = 1;
}
