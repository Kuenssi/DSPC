import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_2} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {ConveyorBeltOne} from './conveyorBeltOne';
import {ElectromagneticTurbine} from '../../components/cat4/electromagneticTurbine';

export class ConveyorBeltTwo extends Item {
  name = CONVEYOR_BELT_MK_2;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new ConveyorBeltOne(), 3),
    new Input(new ElectromagneticTurbine(), 1),
  ];
  outputAmount = 3;
}
