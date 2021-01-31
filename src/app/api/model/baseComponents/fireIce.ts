import {Item} from '../item';
import {FIRE_ICE, FIRE_ICE_VEIN, MINING_MACHINE} from '../../util/constants/names';

export class FireIce extends Item {
  name = FIRE_ICE;
  neededMachine = MINING_MACHINE;
  baseItem = true;
  veinType = FIRE_ICE_VEIN;
}
