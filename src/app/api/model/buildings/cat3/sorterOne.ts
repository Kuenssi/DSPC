import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_1} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class SorterOne extends Item {
  name = SORTER_MK_1;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 1),
    new Input(new CircuitBoard(), 1),
  ];
  outputAmount = 1;
}
