import {Item} from '../../item';
import {ASSEMBLER, MINI_PARTICLE_COLLIDER} from '../../../util/names';

export class MiniParticleCollider extends Item {
  name = MINI_PARTICLE_COLLIDER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
