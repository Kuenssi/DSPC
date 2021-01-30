import {Item} from '../item';
import {MINING_MACHINE, SPINIFORM_STALGMITE_CRYSTAL} from '../../util/names';

export class SpiniformStalagmiteCrystal extends Item {
  name = SPINIFORM_STALGMITE_CRYSTAL;
  neededMachine = MINING_MACHINE;
  baseItem = true;
}
