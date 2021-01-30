import {Item} from '../../item';
import {ASSEMBLER, OIL_EXTRACTOR} from '../../../util/names';

export class OilExtractor extends Item {
  name = OIL_EXTRACTOR;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
