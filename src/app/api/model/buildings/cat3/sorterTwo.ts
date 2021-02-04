import {Item} from '../../item';
import {ASSEMBLER, SORTER_MK_2} from '../../util/constants/names';
import {Input} from '../../util/input';
import {ElectricMotor} from '../../components/cat3/electricMotor';
import {SorterOne} from './sorterOne';

export class SorterTwo extends Item {
  name = SORTER_MK_2;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new SorterOne(), 2),
    new Input(new ElectricMotor(), 1),
  ];
  outputAmount = 2;
}
