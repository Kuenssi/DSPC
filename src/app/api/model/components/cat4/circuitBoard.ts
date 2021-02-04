import {Item} from '../../item';
import {ASSEMBLER, CIRCUIT_BOARD} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../cat1/ironIngot';
import {CopperIngot} from '../cat1/copperIngot';

export class CircuitBoard extends Item {
  name = CIRCUIT_BOARD;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 2),
    new Input(new CopperIngot(), 1),
  ];
  outputAmount = 2;
}
