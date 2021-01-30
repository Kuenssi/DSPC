import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_3} from '../../../util/names';
import {Input} from '../../../util/input';
import {SorterTwo} from './sorterTwo';
import {ElectromagneticTurbine} from '../../components/cat4/electromagneticTurbine';

export class SorterThree extends Item {
  name = SORTER_MK_3;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new SorterTwo(), 2),
    new Input(new ElectromagneticTurbine(), 1),
  ];
  outputAmount = 2;
}
