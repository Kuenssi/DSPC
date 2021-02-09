import {Item} from '../../item';
import {ASSEMBLER, GEAR} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../cat1/ironIngot';

export class Gear extends Item {
  name = GEAR;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/gear_wheel';
}
