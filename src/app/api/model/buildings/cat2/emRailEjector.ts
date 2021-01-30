import {Item} from '../../item';
import {ASSEMBLER, EM_RAIL_EJECTOR} from '../../../util/names';

export class EmRailEjector extends Item {
  name = EM_RAIL_EJECTOR;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
