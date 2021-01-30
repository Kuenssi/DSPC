import {Item} from '../../item';
import {ASSEMBLER, MINI_PARTICLE_COLLIDER} from '../../../util/names';
import {Input} from '../../../util/input';
import {TitaniumAlloy} from '../../components/cat2/titaniumAlloy';
import {FrameMaterial} from '../../components/cat5/frameMaterial';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {Graphene} from '../../components/cat1/graphene';
import {Processor} from '../../components/cat5/processor';

export class MiniParticleCollider extends Item {
  name = MINI_PARTICLE_COLLIDER;
  processingTime = 15;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 20),
    new Input(new FrameMaterial(), 20),
    new Input(new SuperMagneticRing(), 50),
    new Input(new Graphene(), 10),
    new Input(new Processor(), 8),
  ];
  outputAmount = 1;
}
