import {Item} from '../../item';
import {ASSEMBLER, STORAGE_MK_1} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Stone} from '../../components/cat1/stone';
import {IronIngot} from '../../components/cat1/ironIngot';

export class StorageOne extends Item {
  name = STORAGE_MK_1;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 4),
    new Input(new Stone(), 4),
  ];
  outputAmount = 1;
}
