import {Item} from '../item';
import {A_GRAPHENE, CHEMICAL_PLANT} from '../util/constants/names';
import {Input} from '../util/input';
import {FireIce} from '../baseComponents/fireIce';

export class AdvancedGraphene extends Item {
  name = A_GRAPHENE;
  processingTime = 2;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new FireIce(), 2),
  ];
  outputAmount = 1; //TODO
  // 2x Graphene
  // 1x Hydrogen
  imageSource = 'components/graphene_lv2';
}
