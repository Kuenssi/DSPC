import {Item} from '../item';
import {WATER, WATER_PUMP} from '../util/constants/names';

export class Water extends Item {
  name = WATER;
  processingTime = 1;
  neededMachine = WATER_PUMP;
  baseItem = true;
  veinType = WATER_PUMP + 's';
  outputAmount = 1;
  imageSource = 'base/water';
}
