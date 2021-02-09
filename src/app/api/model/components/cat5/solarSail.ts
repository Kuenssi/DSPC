import {Item} from '../../item';
import {ASSEMBLER, SOLAR_SAIL} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Graphene} from '../cat1/graphene';
import {PhotonCombiner} from '../cat6/photonCombiner';

export class SolarSail extends Item {
  name = SOLAR_SAIL;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Graphene(), 1),
    new Input(new PhotonCombiner(), 1),
  ];
  outputAmount = 2;
  imageSource = 'components/solar_collector';
}
