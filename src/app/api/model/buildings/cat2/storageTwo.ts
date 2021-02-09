import {Item} from '../../item';
import {ASSEMBLER, STORAGE_MK_2} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Stone} from '../../components/cat1/stone';

export class StorageTwo extends Item {
  name = STORAGE_MK_2;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 8),
    new Input(new Stone(), 8),
  ];
  outputAmount = 1;
  imageSource = 'buildings/storage_2';
}
