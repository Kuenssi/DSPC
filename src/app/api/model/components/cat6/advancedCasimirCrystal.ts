import {Item} from '../../item';
import {A_CASIMIR_CRYSTAL, ASSEMBLER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {OpticalGratingCrystal} from '../../baseComponents/opticalGratingCrystal';
import {Graphene} from '../cat1/graphene';
import {Hydrogen} from '../../baseComponents/hydrogen';

export class AdvancedCasimirCrystal extends Item {
  name = A_CASIMIR_CRYSTAL;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new OpticalGratingCrystal(), 6),
    new Input(new Graphene(), 2),
    new Input(new Hydrogen(), 12),
  ];
  outputAmount = 1;
  imageSource = 'components/casimir_crystal_lv2';
}
