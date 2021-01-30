import {Item} from '../../item';
import {ASSEMBLER, THRUSTER} from '../../../util/names';
import {Input} from '../../../util/input';
import {Steel} from './steel';
import {CopperIngot} from '../cat1/copperIngot';

export class Thruster extends Item {
  name = THRUSTER;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 2),
    new Input(new CopperIngot(), 3),
  ];
  outputAmount = 1;
}
