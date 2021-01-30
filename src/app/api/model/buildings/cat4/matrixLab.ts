import {Item} from '../../item';
import {ASSEMBLER, MATRIX_LAB} from '../../../util/names';

export class MatrixLab extends Item {
  name = MATRIX_LAB;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
