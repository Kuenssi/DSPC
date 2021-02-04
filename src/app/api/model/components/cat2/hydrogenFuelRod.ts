import {Item} from '../../item';
import {ASSEMBLER, HYDROGEN_FUEL_ROD} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TitaniumIngot} from '../cat1/titaniumIngot';
import {Hydrogen} from '../../baseComponents/hydrogen';

export class HydrogenFuelRod extends Item {
  name = HYDROGEN_FUEL_ROD;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumIngot(), 1),
    new Input(new Hydrogen(), 5),
  ];
  outputAmount = 1;
}
