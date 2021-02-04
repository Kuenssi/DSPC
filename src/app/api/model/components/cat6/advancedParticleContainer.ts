import {Item} from '../../item';
import {A_PARTICLE_CONTAINER, ASSEMBLER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {UnipolarMagnet} from '../../baseComponents/unipolarMagnet';
import {CopperIngot} from '../cat1/copperIngot';

export class AdvancedParticleContainer extends Item {
  name = A_PARTICLE_CONTAINER;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new UnipolarMagnet(), 10),
    new Input(new CopperIngot(), 2),
  ];
  outputAmount = 1;
}
