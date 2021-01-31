import {Item} from '../../item';
import {ASSEMBLER, PRISMA} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Glass} from '../cat2/glass';

export class Prisma extends Item {
  name = PRISMA;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Glass(), 3),
  ];
  outputAmount = 2;
}
