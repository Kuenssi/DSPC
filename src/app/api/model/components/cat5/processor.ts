import {Item} from '../../item';
import {ASSEMBLER, PROCESSOR} from '../../../util/names';
import {Input} from '../../../util/input';
import {CircuitBoard} from '../cat4/circuitBoard';
import {MicrocrystallineComponent} from '../cat6/microcrystallineComponent';

export class Processor extends Item {
  name = PROCESSOR;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new CircuitBoard(), 2),
    new Input(new MicrocrystallineComponent(), 2),
  ];
  outputAmount = 1;
}
