import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_1} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Gear} from '../../components/cat4/gear';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class AssemblerOne extends Item {
  name = ASSEMBLING_MACHINE_MK_1;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 4),
    new Input(new Gear(), 8),
    new Input(new CircuitBoard(), 4),
  ];
  outputAmount = 1;
}
