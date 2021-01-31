import {Item} from '../../item';
import {CARBON_NANOTUBE, CHEMICAL_PLANT} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Graphene} from '../cat1/graphene';
import {TitaniumIngot} from '../cat1/titaniumIngot';

export class CarbonNanotube extends Item {
  name = CARBON_NANOTUBE;
  processingTime = 4;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new Graphene(), 3),
    new Input(new TitaniumIngot(), 1),
  ];
  outputAmount = 2;
}
