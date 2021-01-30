import {Item} from '../item';
import {MINING_MACHINE, UNIPOLAR_MAGNET} from '../../util/names';

export class UnipolarMagnet extends Item {
  name = UNIPOLAR_MAGNET;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
