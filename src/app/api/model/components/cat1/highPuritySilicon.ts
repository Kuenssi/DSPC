import {Item} from '../../item';
import {HIGH_PURITY_SILICON, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {SiliconOre} from '../../baseComponents/siliconOre';

export class HighPuritySilicon extends Item {
  name = HIGH_PURITY_SILICON;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new SiliconOre(), 2),
  ];
  outputAmount = 1;
}
