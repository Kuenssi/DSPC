import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_1} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Gear} from '../../components/cat4/gear';

export class ConveyorBeltOne extends Item {
  name = CONVEYOR_BELT_MK_1;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 2),
    new Input(new Gear(), 1),
  ];
  outputAmount = 3;
}
