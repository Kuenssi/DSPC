import {Item} from '../../item';
import {ASSEMBLER, PLASMA_EXCITER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {MagneticCoil} from '../cat2/magneticCoil';
import {Prisma} from '../cat3/prisma';

export class PlasmaExciter extends Item {
  name = PLASMA_EXCITER;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new MagneticCoil(), 4),
    new Input(new Prisma(), 2),
  ];
  outputAmount = 1;
  imageSource = 'components/plasma_generator';
}
