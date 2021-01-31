import {Item} from '../item';
import {MINING_MACHINE, OPTICAL_GRATING_CRYSTAL, OPTICAL_GRATING_CRYSTAL_VEIN} from '../../util/constants/names';

export class OpticalGratingCrystal extends Item {
  name = OPTICAL_GRATING_CRYSTAL;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = OPTICAL_GRATING_CRYSTAL_VEIN;
}
