import {Item} from '../item';
import {FRACTAL_SILICON, MINING_MACHINE} from '../../util/constants/names';

export class FractalSilicon extends Item {
  name = FRACTAL_SILICON;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
