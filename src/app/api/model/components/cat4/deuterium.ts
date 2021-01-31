import {Item} from '../../item';
import {DEUTERIUM, MINI_PARTICLE_COLLIDER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Hydrogen} from '../../baseComponents/hydrogen';

export class Deuterium extends Item {
  name = DEUTERIUM;
  processingTime = 5;
  neededMachine = MINI_PARTICLE_COLLIDER;
  inputs = [
    new Input(new Hydrogen(), 10),
  ];
  outputAmount = 5;
}
