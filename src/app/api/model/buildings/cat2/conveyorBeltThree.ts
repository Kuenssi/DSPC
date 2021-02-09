import {Item} from '../../item';
import {ASSEMBLER, CONVEYOR_BELT_MK_3} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Graphene} from '../../components/cat1/graphene';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {ConveyorBeltTwo} from './conveyorBeltTwo';

export class ConveyorBeltThree extends Item {
  name = CONVEYOR_BELT_MK_3;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new ConveyorBeltTwo(), 3),
    new Input(new SuperMagneticRing(), 1),
    new Input(new Graphene(), 1),
  ];
  outputAmount = 3;
  imageSource = 'buildings/belt_3';
}
