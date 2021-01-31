import {Item} from '../item';
import {HYDROGEN, OIL_REFINERY} from '../../util/constants/names';

export class Hydrogen extends Item {
  name = HYDROGEN;
  neededMachine = OIL_REFINERY;
  baseItem = true;
}
