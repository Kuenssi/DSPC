import {Item} from '../../item';
import {ASSEMBLER, CHEMICAL_PLANT} from '../../../util/names';

export class ChemicalPlant extends Item {
  name = CHEMICAL_PLANT;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
