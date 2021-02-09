import {Item} from '../item';
import {
  MINING_MACHINE,
  SPINIFORM_STALGMITE_CRYSTAL,
  SPINIFORM_STALGMITE_CRYSTAL_VEIN
} from '../util/constants/names';

export class SpiniformStalagmiteCrystal extends Item {
  name = SPINIFORM_STALGMITE_CRYSTAL;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = SPINIFORM_STALGMITE_CRYSTAL_VEIN;
  imageSource = 'base/bamboo_crystal';
}
