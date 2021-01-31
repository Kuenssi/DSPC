import {Item} from '../../item';
import {RESEARCH_FACILITY, STRUCTURE_MATRIX} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Diamond} from '../cat2/diamond';
import {TitaniumCrystal} from '../cat3/titaniumCrystal';

export class StructureMatrix extends Item {
  name = STRUCTURE_MATRIX;
  processingTime = 8;
  neededMachine = RESEARCH_FACILITY;
  inputs = [
    new Input(new Diamond(), 1),
    new Input(new TitaniumCrystal(), 1),
  ];
  outputAmount = 1;
}
