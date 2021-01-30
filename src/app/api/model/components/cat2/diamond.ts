import {Item} from '../../item';
import {DIAMOND, SMELTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {EnergeticGraphite} from '../cat1/energeticGraphite';

export class Diamond extends Item {
  name = DIAMOND;
  processingTime = 2;
  neededMachine = SMELTER;
  inputs = [
    new Input(new EnergeticGraphite(), 1),
  ];
  outputAmount = 1;
}
