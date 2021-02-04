import {Item} from '../../item';
import {ASSEMBLER, SUPER_MAGNETIC_RING} from '../../util/constants/names';
import {Input} from '../../util/input';
import {ElectromagneticTurbine} from '../cat4/electromagneticTurbine';
import {Magnet} from '../cat2/magnet';
import {EnergeticGraphite} from '../cat1/energeticGraphite';

export class SuperMagneticRing extends Item {
  name = SUPER_MAGNETIC_RING;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new ElectromagneticTurbine(), 2),
    new Input(new Magnet(), 3),
    new Input(new EnergeticGraphite(), 1),
  ];
  outputAmount = 1;
}
