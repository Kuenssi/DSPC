import {Item} from '../../item';
import {ASSEMBLER, PHOTON_COMBINER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Prisma} from '../cat3/prisma';
import {CircuitBoard} from '../cat4/circuitBoard';

export class PhotonCombiner extends Item {
  name = PHOTON_COMBINER;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Prisma(), 2),
    new Input(new CircuitBoard(), 1),
  ];
  outputAmount = 1;
}
