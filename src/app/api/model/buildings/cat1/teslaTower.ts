import {Item} from '../../item';
import {ASSEMBLER, TESLA_TOWER} from '../../../util/names';

export class TeslaTower extends Item {
  name = TESLA_TOWER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
