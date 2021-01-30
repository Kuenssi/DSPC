import {Item} from '../../item';
import {ASSEMBLER, SMELTER} from '../../../util/names';

export class Smelter extends Item {
  name = SMELTER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
