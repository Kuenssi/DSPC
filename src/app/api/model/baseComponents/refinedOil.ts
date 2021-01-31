import {Item} from '../item';
import {OIL_REFINERY, REFINED_OIL} from '../../util/constants/names';

export class RefinedOil extends Item {
  name = REFINED_OIL;
  neededMachine = OIL_REFINERY;
  baseItem = true;
}
