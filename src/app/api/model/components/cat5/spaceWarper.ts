import {Item} from '../../item';
import {ASSEMBLER, SPACE_WARPER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {GravitonLens} from '../cat4/gravitonLens';

export class SpaceWarper extends Item {
  name = SPACE_WARPER;
  processingTime = 10;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new GravitonLens(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/space_warper';
}
