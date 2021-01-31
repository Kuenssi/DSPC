import {Item} from '../../item';
import {MINI_PARTICLE_COLLIDER, STRANGE_MATTER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {ParticleContainer} from '../cat5/particleContainer';
import {IronIngot} from '../cat1/ironIngot';
import {Deuterium} from '../cat4/deuterium';

export class StrangeMatter extends Item {
  name = STRANGE_MATTER;
  processingTime = 8;
  neededMachine = MINI_PARTICLE_COLLIDER;
  inputs = [
    new Input(new ParticleContainer(), 2),
    new Input(new IronIngot(), 2),
    new Input(new Deuterium(), 10),
  ];
  outputAmount = 1;
}
