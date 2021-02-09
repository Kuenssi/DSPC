import {Item} from '../../item';
import {COPPER_INGOT, SMELTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CopperOre} from '../../baseComponents/copperOre';
import {IMAGE_ENDING, IMAGE_LOCATION} from '../../util/constants/locations';

export class CopperIngot extends Item {

  constructor() {
    super();
    this.name = COPPER_INGOT;
    this.processingTime = 1;
    this.neededMachine = SMELTER;
    this.inputs = [
      new Input(new CopperOre(), 1),
    ];
    this.outputAmount = 1;
    this.imageSource = IMAGE_LOCATION + 'copperIngot' + IMAGE_ENDING;
  }
}
