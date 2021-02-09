import {Item} from '../../item';
import {ASSEMBLER, SMELTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Stone} from '../../components/cat1/stone';
import {CircuitBoard} from '../../components/cat4/circuitBoard';
import {MagneticCoil} from '../../components/cat2/magneticCoil';

export class Smelter extends Item {
  name = SMELTER;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 4),
    new Input(new Stone(), 2),
    new Input(new CircuitBoard(), 4),
    new Input(new MagneticCoil(), 2),
  ];
  outputAmount = 1;
  imageSource = 'buildings/smelter';
}
