import {Item} from '../../item';
import {ASSEMBLER, FOUNDATION} from '../../../util/names';
import {Input} from '../../../util/input';
import {Stone} from '../cat1/stone';
import {Steel} from '../cat3/steel';

export class Foundation extends Item {
  name = FOUNDATION;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Stone(), 3),
    new Input(new Steel(), 1),
  ];
  outputAmount = 1;
}
