import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_2} from '../../../util/names';
import {Input} from '../../../util/input';
import {AssemblerOne} from './assemblerOne';
import {Graphene} from '../../components/cat1/graphene';
import {Processor} from '../../components/cat5/processor';

export class AssemblerTwo extends Item {
  name = ASSEMBLING_MACHINE_MK_2;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new AssemblerOne(), 1),
    new Input(new Graphene(), 8),
    new Input(new Processor(), 4),
  ];
  outputAmount = 1;
}
