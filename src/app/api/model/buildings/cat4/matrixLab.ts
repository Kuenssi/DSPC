import {Item} from '../../item';
import {ASSEMBLER, MATRIX_LAB} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Glass} from '../../components/cat2/glass';
import {CircuitBoard} from '../../components/cat4/circuitBoard';
import {MagneticCoil} from '../../components/cat2/magneticCoil';

export class MatrixLab extends Item {
  name = MATRIX_LAB;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 8),
    new Input(new Glass(), 4),
    new Input(new CircuitBoard(), 4),
    new Input(new MagneticCoil(), 4),
  ];
  outputAmount = 1;
  imageSource = 'buildings/lab';
}
