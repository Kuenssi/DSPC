import {Item} from '../../item';
import {ASSEMBLER, WATER_PUMP} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Stone} from '../../components/cat1/stone';
import {ElectricMotor} from '../../components/cat3/electricMotor';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class WaterPump extends Item {
  name = WATER_PUMP;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 8),
    new Input(new Stone(), 4),
    new Input(new ElectricMotor(), 4),
    new Input(new CircuitBoard(), 2),
  ];
  outputAmount = 1;
  imageSource = 'buildings/water_pump';
}
