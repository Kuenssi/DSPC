import {Item} from '../../item';
import {ASSEMBLER, CASIMIR_CRYSTAL} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {TitaniumCrystal} from '../cat3/titaniumCrystal';
import {Graphene} from '../cat1/graphene';
import {Hydrogen} from '../../baseComponents/hydrogen';

export class CasimirCrystal extends Item {
  name = CASIMIR_CRYSTAL;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumCrystal(), 1),
    new Input(new Graphene(), 2),
    new Input(new Hydrogen(), 12),
  ];
  outputAmount = 1;
}
