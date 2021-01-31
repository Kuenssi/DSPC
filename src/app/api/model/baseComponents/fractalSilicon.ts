import {Item} from '../item';
import {FRACTAL_SILICON, FRACTAL_SILICON_VEIN, MINING_MACHINE} from '../../util/constants/names';

export class FractalSilicon extends Item {
  name = FRACTAL_SILICON;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = FRACTAL_SILICON_VEIN;
}
