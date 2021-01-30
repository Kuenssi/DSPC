import {Item} from '../../item';
import {ASSEMBLER, INTERSTELLAR_LOGISTICS_STATION} from '../../../util/names';

export class InterstellarLogisticsStation extends Item {
  name = INTERSTELLAR_LOGISTICS_STATION;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
