import {Item} from '../../item';
import {ASSEMBLER, ORBIT_COLLECTOR} from '../../../util/names';

export class OrbitCollector extends Item {
  name = ORBIT_COLLECTOR;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
