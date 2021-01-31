import {Item} from '../../item';
import {ASSEMBLER, LOGISTICS_DRONE} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {IronIngot} from '../cat1/ironIngot';
import {Processor} from '../cat5/processor';
import {Thruster} from '../cat3/thruster';

export class LogisticsDrone extends Item {
  name = LOGISTICS_DRONE;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 5),
    new Input(new Processor(), 2),
    new Input(new Thruster(), 2),
  ];
  outputAmount = 1;
}
