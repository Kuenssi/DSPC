import {Item} from '../../item';
import {ASSEMBLER, SATELLITE_SUBSTATION} from '../../../util/names';

export class SatelliteSubstation extends Item {
  name = SATELLITE_SUBSTATION;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
