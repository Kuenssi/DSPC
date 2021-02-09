import {Item} from '../../item';
import {ELECTROMAGNETIC_MATRIX, RESEARCH_FACILITY} from '../../util/constants/names';
import {Input} from '../../util/input';
import {MagneticCoil} from '../cat2/magneticCoil';
import {CircuitBoard} from '../cat4/circuitBoard';

export class ElectromagneticMatrix extends Item {
  name = ELECTROMAGNETIC_MATRIX;
  processingTime = 3;
  neededMachine = RESEARCH_FACILITY;
  inputs = [
    new Input(new MagneticCoil(), 1),
    new Input(new CircuitBoard(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/e_matrix';
}
