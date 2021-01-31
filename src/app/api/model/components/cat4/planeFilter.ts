import {Item} from '../../item';
import {ASSEMBLER, PLANE_FILTER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {CasimirCrystal} from '../cat5/casimirCrystal';
import {TitaniumGlass} from '../cat3/titaniumGlass';

export class PlaneFilter extends Item {
  name = PLANE_FILTER;
  processingTime = 12;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new CasimirCrystal(), 1),
    new Input(new TitaniumGlass(), 2),
  ];
  outputAmount = 1;
}
