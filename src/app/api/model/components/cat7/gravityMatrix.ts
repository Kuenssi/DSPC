import {Item} from '../../item';
import {GRAVITY_MATRIX, RESEARCH_FACILITY} from '../../util/constants/names';
import {Input} from '../../util/input';
import {GravitonLens} from '../cat4/gravitonLens';
import {QuantumChip} from '../cat6/quantumChip';

export class GravityMatrix extends Item {
  name = GRAVITY_MATRIX;
  processingTime = 24;
  neededMachine = RESEARCH_FACILITY;
  inputs = [
    new Input(new GravitonLens(), 1),
    new Input(new QuantumChip(), 1),
  ];
  outputAmount = 2;
}
