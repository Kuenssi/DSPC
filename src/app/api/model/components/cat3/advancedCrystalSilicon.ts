import {Item} from '../../item';
import {Input} from '../../util/input';
import {A_CRYSTAL_SILICON, ASSEMBLER} from '../../util/constants/names';
import {FractalSilicon} from '../../baseComponents/fractalSilicon';

export class AdvancedCrystalSilicon extends Item {
  name = A_CRYSTAL_SILICON;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new FractalSilicon(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/silicium_single_crystal_lv2';
}
