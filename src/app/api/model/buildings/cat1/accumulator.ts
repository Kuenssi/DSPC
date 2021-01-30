import {Item} from '../../item';
import {ACCUMULATOR, ASSEMBLER} from '../../../util/names';
import {Input} from '../../../util/input';
import {CrystalSilicon} from '../../components/cat2/crystalSilicon';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {IronIngot} from '../../components/cat1/ironIngot';

export class Accumulator extends Item {
  name = ACCUMULATOR;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 6),
    new Input(new SuperMagneticRing(), 6),
    new Input(new CrystalSilicon(), 4),
  ];
  outputAmount = 1;
}
