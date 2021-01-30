import {Item} from '../item';
import {MINING_MACHINE, OPTICAL_GRATING_CRYSTAL} from '../../util/names';

export class OpticalGratingCrystal extends Item {
  name = OPTICAL_GRATING_CRYSTAL;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
