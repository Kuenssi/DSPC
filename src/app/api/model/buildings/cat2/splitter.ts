import {Item} from '../../item';
import {ASSEMBLER, SPLITTER} from '../../../util/names';

export class Splitter extends Item {
  name = SPLITTER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
