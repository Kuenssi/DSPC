import {Item} from '../../item';
import {ASSEMBLER, SOLAR_PANEL} from '../../../util/names';

export class SolarPanel extends Item {
  name = SOLAR_PANEL;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
