import {Item} from '../../item';
import {CHEMICAL_PLANT, GRAPHENE} from '../../util/constants/names';
import {Input} from '../../util/input';
import {EnergeticGraphite} from './energeticGraphite';
import {SulfuricAcid} from '../cat4/sulfuricAcid';

export class Graphene extends Item {
  name = GRAPHENE;
  processingTime = 3;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new EnergeticGraphite(), 3),
    new Input(new SulfuricAcid(), 1),
  ];
  outputAmount = 2;
}
