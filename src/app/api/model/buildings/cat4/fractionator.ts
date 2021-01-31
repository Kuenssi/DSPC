import {Item} from '../../item';
import {ASSEMBLER, FRACTIONATOR} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Stone} from '../../components/cat1/stone';
import {Glass} from '../../components/cat2/glass';
import {Processor} from '../../components/cat5/processor';

export class Fractionator extends Item {
  name = FRACTIONATOR;
  processingTime = 3;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 8),
    new Input(new Stone(), 4),
    new Input(new Glass(), 4),
    new Input(new Processor(), 1),
  ];
  outputAmount = 1;
}
