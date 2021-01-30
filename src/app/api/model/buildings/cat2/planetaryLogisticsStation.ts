import {Item} from '../../item';
import {ASSEMBLER, PLANETARY_LOGISTICS_STATION} from '../../../util/names';

export class PlanetaryLogisticsStation extends Item {
  name = PLANETARY_LOGISTICS_STATION;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
