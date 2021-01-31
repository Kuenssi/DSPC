import {Item} from '../../item';
import {A_PHOTON_COMBINER, ASSEMBLER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {CircuitBoard} from '../cat4/circuitBoard';
import {OpticalGratingCrystal} from '../../baseComponents/opticalGratingCrystal';

export class AdvancedPhotonCombiner extends Item {
  name = A_PHOTON_COMBINER;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new OpticalGratingCrystal(), 1),
    new Input(new CircuitBoard(), 1),
  ];
  outputAmount = 1;
}
