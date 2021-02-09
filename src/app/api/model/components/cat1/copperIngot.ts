import {Item} from '../../item';
import {COPPER_INGOT, SMELTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CopperOre} from '../../baseComponents/copperOre';

export class CopperIngot extends Item {
  name = COPPER_INGOT;
  processingTime = 1;
  neededMachine = SMELTER;
  inputs = [
    new Input(new CopperOre(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/copper_plate';
}
