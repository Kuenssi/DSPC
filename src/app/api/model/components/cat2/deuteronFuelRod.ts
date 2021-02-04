import {Item} from '../../item';
import {ASSEMBLER, DEUTERON_FUEL_ROD} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TitaniumAlloy} from './titaniumAlloy';
import {Deuterium} from '../cat4/deuterium';
import {SuperMagneticRing} from '../cat5/superMagneticRing';

export class DeuteronFuelRod extends Item {
  name = DEUTERON_FUEL_ROD;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 1),
    new Input(new Deuterium(), 10),
    new Input(new SuperMagneticRing(), 1),
  ];
  outputAmount = 1;
}
