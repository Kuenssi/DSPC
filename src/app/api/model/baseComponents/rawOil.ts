import {Item} from '../item';
import {OIL_EXTRACTOR, RAW_OIL, RAW_OIL_SPOT} from '../util/constants/names';

export class RawOil extends Item {
  name = RAW_OIL;
  neededMachine = OIL_EXTRACTOR;
  baseItem = true;
  veinType = RAW_OIL_SPOT;
  imageSource = 'base/oil';
}
