import {Item} from '../../item';
import {ASSEMBLER, STORAGE_TANK} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Glass} from '../../components/cat2/glass';
import {Stone} from '../../components/cat1/stone';
import {IronIngot} from '../../components/cat1/ironIngot';

export class StorageTank extends Item {
  name = STORAGE_TANK;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 8),
    new Input(new Stone(), 4),
    new Input(new Glass(), 4),
  ];
  outputAmount = 1;
}
