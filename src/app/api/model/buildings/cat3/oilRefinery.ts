import {Item} from '../../item';
import {ASSEMBLER, OIL_REFINERY} from '../../../util/names';

export class OilRefinery extends Item {
  name = OIL_REFINERY;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
