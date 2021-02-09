import {Item} from '../../item';
import {ASSEMBLER, GRAVITON_LENS} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Diamond} from '../cat2/diamond';
import {StrangeMatter} from '../cat3/strangeMatter';

export class GravitonLens extends Item {
  name = GRAVITON_LENS;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Diamond(), 4),
    new Input(new StrangeMatter(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/gravity_lens';
}
