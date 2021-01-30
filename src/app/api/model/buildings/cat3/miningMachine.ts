import {Item} from '../../item';
import {ASSEMBLER, MINING_MACHINE} from '../../../util/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {CircuitBoard} from '../../components/cat4/circuitBoard';
import {MagneticCoil} from '../../components/cat2/magneticCoil';
import {Gear} from '../../components/cat4/gear';

export class MiningMachine extends Item {
  name = MINING_MACHINE;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 4),
    new Input(new CircuitBoard(), 2),
    new Input(new MagneticCoil(), 2),
    new Input(new Gear(), 2),
  ];
  outputAmount = 1;
}
