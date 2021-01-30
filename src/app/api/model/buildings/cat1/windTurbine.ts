import {Item} from '../../item';
import {ASSEMBLER, WIND_TURBINE} from '../../../util/names';

export class WindTurbine extends Item {
  name = WIND_TURBINE;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
