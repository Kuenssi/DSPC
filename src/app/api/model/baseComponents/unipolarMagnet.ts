import {Item} from '../item';
import {MINING_MACHINE, UNIPOLAR_MAGNET, UNIPOLAR_MAGNET_VEIN} from '../util/constants/names';

export class UnipolarMagnet extends Item {
  name = UNIPOLAR_MAGNET;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = UNIPOLAR_MAGNET_VEIN;
  imageSource = 'base/mono_mag_ore';
}
