import {Item} from '../../item';
import {ENERGETIC_GRAPHITE, SMELTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CoalOre} from '../../baseComponents/coalOre';

export class EnergeticGraphite extends Item {
  name = ENERGETIC_GRAPHITE;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new CoalOre(), 2),
  ];
  outputAmount = 1;
  imageSource = 'components/graphite';
}
