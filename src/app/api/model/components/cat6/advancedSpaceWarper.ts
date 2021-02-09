import {Item} from '../../item';
import {A_SPACE_WARPER, ASSEMBLER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {GravityMatrix} from '../cat7/gravityMatrix';

export class AdvancedSpaceWarper extends Item {
  name = A_SPACE_WARPER;
  processingTime = 10;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new GravityMatrix(), 1),
  ];
  outputAmount = 8;
  imageSource = 'components/space_warper_lv2';
}
