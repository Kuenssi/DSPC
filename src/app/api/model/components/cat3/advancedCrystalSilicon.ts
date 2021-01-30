import {Item} from '../../item';
import {Input} from '../../../util/input';
import {A_CRYSTAL_SILICON, ASSEMBLER} from '../../../util/names';
import {FractalSilicon} from '../../baseComponents/fractalSilicon';

export class AdvancedCrystalSilicon extends Item {
  name = A_CRYSTAL_SILICON;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new FractalSilicon(), 1),
  ];
  outputAmount = 1;
}
