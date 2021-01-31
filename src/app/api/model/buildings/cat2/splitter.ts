import {Item} from '../../item';
import {ASSEMBLER, SPLITTER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Gear} from '../../components/cat4/gear';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class Splitter extends Item {
  name = SPLITTER;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 3),
    new Input(new Gear(), 2),
    new Input(new CircuitBoard(), 1),
  ];
  outputAmount = 1;
}
