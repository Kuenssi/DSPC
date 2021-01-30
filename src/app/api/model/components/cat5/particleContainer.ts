import {Item} from '../../item';
import {ASSEMBLER, PARTICLE_CONTAINER} from '../../../util/names';
import {Input} from '../../../util/input';
import {ElectromagneticTurbine} from '../cat4/electromagneticTurbine';
import {CopperIngot} from '../cat1/copperIngot';
import {Graphene} from '../cat1/graphene';

export class ParticleContainer extends Item {
  name = PARTICLE_CONTAINER;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new ElectromagneticTurbine(), 2),
    new Input(new CopperIngot(), 2),
    new Input(new Graphene(), 2),
  ];
  outputAmount = 1;
}
