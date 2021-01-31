import {Item} from '../../item';
import {CRYSTAL_SILICON, SMELTER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {HighPuritySilicon} from '../cat1/highPuritySilicon';

export class CrystalSilicon extends Item {
  name = CRYSTAL_SILICON;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new HighPuritySilicon(), 1),
  ];
  outputAmount = 1;
}
